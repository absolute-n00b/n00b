import { BigNumber } from "ethers";
import { Decimal } from "@liquity/lib-base";

export const CHAINLINK_DECIMALS = 8;
export const ONE_ETHER = BigNumber.from(10).pow(18);
export const PROFITABILITY_MINIMUM = ONE_ETHER.div(100).mul(2); // 0.02 eth
export const SWAP_AMOUNTS = [
    ONE_ETHER.div(3), // .3333
    ONE_ETHER.div(2), // 0.5
    ONE_ETHER.mul(1), // 1
    ONE_ETHER.mul(6).div(5), // 1.2
    ONE_ETHER.mul(2), // 2
];
export const LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE = Decimal.from(0.001); // 0.1%

// export const ARBITRAGE_CONTRACT_ADDRESS = "0x98b644834392081e8b8478188d5ddc268dd9a586";
// export const ARBITRAGE_CONTRACT_ADDRESS = "0x738eeb1c5710b701fdb408de071dc315de289b42";
// export const ARBITRAGE_CONTRACT_ADDRESS = "0x5EF1009b9FCD4fec3094a5564047e190D72Bd511";
export const ARBITRAGE_CONTRACT_ADDRESS = "0x8259196dfF5e10c54C66d6Aa531265f488918671";
export const ARBITRAGE_CONTRACT_ABI = [
    { inputs: [], stateMutability: "payable", type: "constructor" },
    {
        inputs: [
            { internalType: "uint256", name: "_wethAmount", type: "uint256" },
            { internalType: "bytes[2]", name: "_payloads", type: "bytes[2]" },
        ],
        name: "MakeCalls",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
    { stateMutability: "payable", type: "receive" },
];

export const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
export const UNISWAP_ROUTER_ABI = [
    {
        "inputs": [{
            "internalType": "address",
            "name": "_factory",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "_WETH",
            "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "inputs": [],
        "name": "WETH",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amountADesired",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountBDesired",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "addLiquidity",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amountTokenDesired",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "addLiquidityETH",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "factory",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
        }],
        "name": "getAmountIn",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }],
        "stateMutability": "pure",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
        }],
        "name": "getAmountOut",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }],
        "stateMutability": "pure",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }],
        "name": "getAmountsIn",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }],
        "name": "getAmountsOut",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveA",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "reserveB",
            "type": "uint256"
        }],
        "name": "quote",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }],
        "stateMutability": "pure",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "removeLiquidity",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "removeLiquidityETH",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
        }, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "removeLiquidityETHWithPermit",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
        }, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
        }, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "removeLiquidityWithPermit",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapETHForExactTokens",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactETHForTokens",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactTokensForETH",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactTokensForTokens",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapTokensForExactETH",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        }, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapTokensForExactTokens",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }
]

export const UNISWAP_PAIR_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const UNISWAP_PAIR_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        }, {
            "indexed": true,
            "internalType": "int24",
            "name": "tickSpacing",
            "type": "int24"
        }],
        "name": "FeeAmountEnabled",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "oldOwner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "OwnerChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "token0",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "token1",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        }, {
            "indexed": false,
            "internalType": "int24",
            "name": "tickSpacing",
            "type": "int24"
        }, {
            "indexed": false,
            "internalType": "address",
            "name": "pool",
            "type": "address"
        }],
        "name": "PoolCreated",
        "type": "event"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        }],
        "name": "createPool",
        "outputs": [{
            "internalType": "address",
            "name": "pool",
            "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        }, {
            "internalType": "int24",
            "name": "tickSpacing",
            "type": "int24"
        }],
        "name": "enableFeeAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint24",
            "name": "",
            "type": "uint24"
        }],
        "name": "feeAmountTickSpacing",
        "outputs": [{
            "internalType": "int24",
            "name": "",
            "type": "int24"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "uint24",
            "name": "",
            "type": "uint24"
        }],
        "name": "getPool",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "parameters",
        "outputs": [{
            "internalType": "address",
            "name": "factory",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "token0",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "token1",
            "type": "address"
        }, {
            "internalType": "uint24",
            "name": "fee",
            "type": "uint24"
        }, {
            "internalType": "int24",
            "name": "tickSpacing",
            "type": "int24"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

// export const UNISWAP_PAIR_ADDRESS = "0xE99F8d6E64d039D06A20f0149E67BF8eB2e5b025";
// export const UNISWAP_PAIR_ABI = [
//     { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: true, internalType: "address", name: "owner", type: "address" },
//             { indexed: true, internalType: "address", name: "spender", type: "address" },
//             { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
//         ],
//         name: "Approval",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: true, internalType: "address", name: "sender", type: "address" },
//             { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
//             { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
//             { indexed: true, internalType: "address", name: "to", type: "address" },
//         ],
//         name: "Burn",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: true, internalType: "address", name: "sender", type: "address" },
//             { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
//             { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
//         ],
//         name: "Mint",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: true, internalType: "address", name: "sender", type: "address" },
//             { indexed: false, internalType: "uint256", name: "amount0In", type: "uint256" },
//             { indexed: false, internalType: "uint256", name: "amount1In", type: "uint256" },
//             { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" },
//             { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" },
//             { indexed: true, internalType: "address", name: "to", type: "address" },
//         ],
//         name: "Swap",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: false, internalType: "uint112", name: "reserve0", type: "uint112" },
//             { indexed: false, internalType: "uint112", name: "reserve1", type: "uint112" },
//         ],
//         name: "Sync",
//         type: "event",
//     },
//     {
//         anonymous: false,
//         inputs: [
//             { indexed: true, internalType: "address", name: "from", type: "address" },
//             { indexed: true, internalType: "address", name: "to", type: "address" },
//             { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
//         ],
//         name: "Transfer",
//         type: "event",
//     },
//     { constant: true, inputs: [], name: "DOMAIN_SEPARATOR", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "MINIMUM_LIQUIDITY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "PERMIT_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], payable: false, stateMutability: "view", type: "function" },
//     {
//         constant: true,
//         inputs: [
//             { internalType: "address", name: "", type: "address" },
//             { internalType: "address", name: "", type: "address" },
//         ],
//         name: "allowance",
//         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//         payable: false,
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "address", name: "spender", type: "address" },
//             { internalType: "uint256", name: "value", type: "uint256" },
//         ],
//         name: "approve",
//         outputs: [{ internalType: "bool", name: "", type: "bool" }],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     { constant: true, inputs: [{ internalType: "address", name: "", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     {
//         constant: false,
//         inputs: [{ internalType: "address", name: "to", type: "address" }],
//         name: "burn",
//         outputs: [
//             { internalType: "uint256", name: "amount0", type: "uint256" },
//             { internalType: "uint256", name: "amount1", type: "uint256" },
//         ],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     { constant: true, inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
//     {
//         constant: true,
//         inputs: [],
//         name: "getReserves",
//         outputs: [
//             { internalType: "uint112", name: "_reserve0", type: "uint112" },
//             { internalType: "uint112", name: "_reserve1", type: "uint112" },
//             { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
//         ],
//         payable: false,
//         stateMutability: "view",
//         type: "function",
//     },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "address", name: "_token0", type: "address" },
//             { internalType: "address", name: "_token1", type: "address" },
//         ],
//         name: "initialize",
//         outputs: [],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     { constant: true, inputs: [], name: "kLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: false, inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }], payable: false, stateMutability: "nonpayable", type: "function" },
//     { constant: true, inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [{ internalType: "address", name: "", type: "address" }], name: "nonces", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "address", name: "owner", type: "address" },
//             { internalType: "address", name: "spender", type: "address" },
//             { internalType: "uint256", name: "value", type: "uint256" },
//             { internalType: "uint256", name: "deadline", type: "uint256" },
//             { internalType: "uint8", name: "v", type: "uint8" },
//             { internalType: "bytes32", name: "r", type: "bytes32" },
//             { internalType: "bytes32", name: "s", type: "bytes32" },
//         ],
//         name: "permit",
//         outputs: [],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     { constant: true, inputs: [], name: "price0CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "price1CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: false, inputs: [{ internalType: "address", name: "to", type: "address" }], name: "skim", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "uint256", name: "amount0Out", type: "uint256" },
//             { internalType: "uint256", name: "amount1Out", type: "uint256" },
//             { internalType: "address", name: "to", type: "address" },
//             { internalType: "bytes", name: "data", type: "bytes" },
//         ],
//         name: "swap",
//         outputs: [],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     { constant: true, inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: false, inputs: [], name: "sync", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
//     { constant: true, inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
//     { constant: true, inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "address", name: "to", type: "address" },
//             { internalType: "uint256", name: "value", type: "uint256" },
//         ],
//         name: "transfer",
//         outputs: [{ internalType: "bool", name: "", type: "bool" }],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
//     {
//         constant: false,
//         inputs: [
//             { internalType: "address", name: "from", type: "address" },
//             { internalType: "address", name: "to", type: "address" },
//             { internalType: "uint256", name: "value", type: "uint256" },
//         ],
//         name: "transferFrom",
//         outputs: [{ internalType: "bool", name: "", type: "bool" }],
//         payable: false,
//         stateMutability: "nonpayable",
//         type: "function",
//     },
// ];

// export const CHAINLINK_ADDRESS = "0x986b5E1e1755e3C2440e960477f25201B0a8bbD4";
// export const CHAINLINK_ADDRESS = "0x9326BFA02ADD2366b30bacB125260Af641031331";
export const CHAINLINK_ADDRESS = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
export const CHAINLINK_ABI = [
    {
        inputs: [
            { internalType: "address", name: "_aggregator", type: "address" },
            { internalType: "address", name: "_accessController", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "int256", name: "current", type: "int256" },
            { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "updatedAt", type: "uint256" },
        ],
        name: "AnswerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
            { indexed: true, internalType: "address", name: "startedBy", type: "address" },
            { indexed: false, internalType: "uint256", name: "startedAt", type: "uint256" },
        ],
        name: "NewRound",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "OwnershipTransferRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "accessController", outputs: [{ internalType: "contract AccessControllerInterface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "aggregator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "confirmAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "description", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "getRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "latestAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "latestRound", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "latestTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "owner", outputs: [{ internalType: "address payable", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "uint16", name: "", type: "uint16" }], name: "phaseAggregators", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "phaseId", outputs: [{ internalType: "uint16", name: "", type: "uint16" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "proposeAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "proposedAggregator", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "proposedGetRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proposedLatestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [{ internalType: "address", name: "_accessController", type: "address" }], name: "setController", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [{ internalType: "address", name: "_to", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "version", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
];
