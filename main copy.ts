require('dotenv').config();

import { Contract, providers, utils, Wallet, BigNumber } from "ethers";
const { red, blue, green, yellow, dim } = require("chalk");
import { env } from "process";
import * as constants from "./constants";
import { EthersLiquity } from "@liquity/lib-ethers";
import { Decimal } from "@liquity/lib-base";
import { getUniswapOut } from "./util";
import { ChainId, Token, WETH, Fetcher, Trade, Route, TokenAmount, TradeType, Percent } from '@uniswap/sdk';


// Loggin utils
function log(message: any) {
    console.log(`${dim(`[${new Date().toLocaleTimeString()}]`)} ${message}`);
}
const info = message => log(`${blue("ℹ")} ${message}`);
const warn = message => log(`${yellow("‼")} ${message}`);
const error = message => log(`${red("✖")} ${message}`);
const success = message => log(`${green("✔")} ${message}`);

function br() {
    console.log("\n--------------------------------------------------\n");
}


async function main() {
    br();
    info("Starting");
    br();
    if (!env.INFURA_KEY) {
        console.log("Please provide a key for Infura.");
        return;
    }
    if (!env.ETHEREUM_PRIVATE_KEY) {
        console.log("Please provide a private key environment variable as ETHEREUM_PRIVATE_KEY.");
        return;
    }
    info("Initializing provider, wallet, liquity client, Cahinlink proxy, Uniswap router, and contracts");
    const provider = new providers.InfuraWebSocketProvider(1, process.env.INFURA_KEY);
    const wallet = new Wallet(env.ETHEREUM_PRIVATE_KEY).connect(provider);
    const liquity = await EthersLiquity.connect(wallet);
    const chainlinkProxy = new Contract(constants.CHAINLINK_ADDRESS, constants.CHAINLINK_ABI, provider);
    const uniswapRouter = new Contract(constants.UNISWAP_ROUTER_ADDRESS, constants.UNISWAP_ROUTER_ABI, provider);
    // const uniswapPool = new Contract(constants.UNISWAP_PAIR_ADDRESS, constants.UNISWAP_PAIR_ABI, provider);
    const arbitrageContract = new Contract(constants.ARBITRAGE_CONTRACT_ADDRESS, constants.ARBITRAGE_CONTRACT_ABI, provider);
    const profitTxData = new Map();


    provider.on('block', async blockNumber => {
        br();
        success("New Block: ".concat(blockNumber.toString()));
        br();
        const chainlinkPrice = (await chainlinkProxy.functions.latestRoundData()).answer.mul(BigNumber.from(10).pow(18 - constants.CHAINLINK_DECIMALS));
        const chainlinkDollarPrice = chainlinkPrice.div(BigNumber.from(10).pow(18));
        info(`Chainlink ETH price in USD: ${chainlinkDollarPrice.toString()}`);

        const LUSD = new Token(ChainId.MAINNET, '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0', 18);
        const pair = await Fetcher.fetchPairData(LUSD, WETH[LUSD.chainId]);
        const route = new Route([pair], WETH[LUSD.chainId])
        const uniswapPrice = BigNumber.from(route.midPrice.toSignificant(4));
        info(`Uniswap ETH price in LUSD: ${uniswapPrice.toString()}`);
        br();
        // const uniswapReserves = await uniswapPool.functions.getReserves();
        // if (!uniswapReserves["_reserve0"] || !uniswapReserves["_reserve1"]) {
        //     console.log("Received invalid reserves data from Uniswap");
        //     return;
        // }
        // const uniswapPrice = uniswapReserves["_reserve1"].div(uniswapReserves["_reserve0"]);
        // console.log(`Uniswap ETH price in LUSD: ${uniswapPrice.toString()}`);

        // console.log(getUniswapOut(uniswapPrice, constants.ONE_ETHER.div(4)).toString());

        profitTxData.clear();

        // if we get more lusd per eth on uniswap
        if (uniswapPrice.gt(chainlinkDollarPrice)) {
            br();
            success("Uniswap price is greater than Chainlink's");
            br();
            const [fees, total] = await Promise.all([liquity.getFees(), liquity.getTotal()]);
            var greatestProfit: BigNumber = BigNumber.from(0);
            console.log("1");
            await Promise.all(
                constants.SWAP_AMOUNTS.map(async (ethStartAmount: BigNumber) => {
                    const attemptedAmountLUSD = Decimal.fromBigNumberString(getUniswapOut(uniswapPrice, ethStartAmount).toString());
                    console.log("2");
                    const uniswapTrade = new Trade(route, new TokenAmount(WETH[LUSD.chainId], attemptedAmountLUSD.bigNumber), TradeType.EXACT_INPUT);
                    console.log("3");
                    const slippageTolerance = new Percent('30', '10000') // 30 bips, or 0.30%
                    console.log("4");
                    const amountOutMin = uniswapTrade.minimumAmountOut(slippageTolerance).raw.toString(); // needs to be converted to e.g. hex
                    const path = [WETH[LUSD.chainId].address, LUSD.address]
                    const to = constants.ARBITRAGE_CONTRACT_ADDRESS // should be a checksummed recipient address
                    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
                    const value = uniswapTrade.inputAmount.raw.toString() // // needs to be converted to e.g. hex
                    console.log("5");
                    console.log(amountOutMin.concat("Amt out"));

                    console.log(path.concat("path"));

                    console.log(to.concat("to"));
                    console.log(amountOutMin, path, to, deadline, value);
                    const uniswapResult = await uniswapRouter.populateTransaction.swapExactETHForTokens(amountOutMin, path, to, deadline);
                    // const unsignedTx = utils.serializeTransaction(uniswapResult);



                    // const uniswapResult = await uniswapPool.populateTransaction.swap(BigNumber.from(0), attemptedAmountLUSD.bigNumber, constants.ARBITRAGE_CONTRACT_ADDRESS, [], { gasLimit: 700000 });

                    // calcualte redemption fee
                    const defaultMaxRedemptionRate = (amount: Decimal) => Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), Decimal.ONE);
                    console.log("A".concat(defaultMaxRedemptionRate.toString()));
                    const redeemedETH = attemptedAmountLUSD.div(Decimal.fromBigNumberString(chainlinkPrice.toString()));
                    const redemptionFeeETH = redeemedETH.mul(defaultMaxRedemptionRate(attemptedAmountLUSD));
                    const redeemedNetETH = redeemedETH.sub(redemptionFeeETH);
                    console.log("got eth");
                    const profit = BigNumber.from(redeemedNetETH.bigNumber).sub(ethStartAmount);
                    console.log("profit".concat(profit.toString()));
                    warn(`Initial: ${utils.formatEther(ethStartAmount)} ETH; Uniswap Output: ${attemptedAmountLUSD} LUSD; Redeemed: ${redeemedETH} ETH; Net Redeemed: ${redeemedNetETH} ETH; Profit: ${utils.formatEther(profit)} ETH`);
               
                    if (profit.gt(greatestProfit)) {
                        // may fail if amount is too low so just silently error because it is not critical
                        try {
                            console.log("Result");
                            const redeemResult: any = await liquity.populate.redeemLUSD(attemptedAmountLUSD, undefined, { gasLimit: 700000 });
                            // if we don't have a partial redemption
                            if (redeemResult.attemptedLUSDAmount.eq(redeemResult.redeemableLUSDAmount)) {
                                console.log("try");
                                profitTxData.set(profit.toString(), await arbitrageContract.populateTransaction.MakeCalls(ethStartAmount, [uniswapResult["data"], redeemResult["rawPopulatedTransaction"]["data"]], { gasLimit: 700000, gasPrice: 30000000000}));
                                greatestProfit = profit;
                            }
                        } catch {
                            return;
                        }
                    }
                }),
            );
            // at 15 gwei an arbitrage costs approximately (15/1e9) * 600000 = 0.01 eth.  we require profit to be at least 0.02 eth because sometimes our fee calculations slightly underestimate the fee
            if (greatestProfit.gt(constants.PROFITABILITY_MINIMUM) && profitTxData.get(greatestProfit.toString())) {
                success("Submitted Transaction!\nHash: " + (await wallet.sendTransaction(profitTxData.get(greatestProfit.toString()))).hash);
            } else {
                error("No profitable opportunities found");
            }
        } else {
            error("No arbitrage opportunity found.");
        }
        // separator
        console.log("");
    });
}

main();
