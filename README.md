# n00b

I am an absolute n00b.

This repo holds the main files for a liquity redemption bot I ran on the mainnet (like an idiot) and lost 2 ETH. My code has more than one mistake, I am looking for help in dissecting mistake 2. In particular, how does [this address](https://etherscan.io/address/0x85f2c4add745e85e83e6ba0ad15cc29c42930cc4) end up with the ETH?

## Recap

The bot found that LUSD was trading for less than USD, this triggered an attempt to redeem LUSD 
```const redeemResult: any = await liquity.populate.redeemLUSD(attemptedAmountLUSD, undefined, { gasLimit: 700000 });``` and send a corresponding Uniswap transaction for ETH/USD. Execute.sol, currently deployed [here](https://etherscan.io/address/0x8259196dfF5e10c54C66d6Aa531265f488918671), was the intended target of the makeCall (with transactions), but ithe ETH was instead sent to [this address](https://etherscan.io/address/0x85f2c4add745e85e83e6ba0ad15cc29c42930cc4) as you can see in [tx1](https://etherscan.io/tx/0x570d1cf456a36d4a520c68d52905ab06ca8e09ef1f80d27d78d8907175a93358) and [tx2](https://etherscan.io/tx/0x3ed361d9aa40522535d57836411718c883bf4a2ec486cee9f3092dee7719e204).

The [logged trnsaction](https://github.com/absolute-n00b/n00b/blob/main/main%20copy.ts#L141) hash from this statement is not a real transaction on Etherscan - it is a mistake.

## Questions

I want to learn more about what went wrong here

1) I obviously made a mistake with a unit error overpaying gas.
2) How did [0x85f](https://etherscan.io/address/0x85f2c4add745e85e83e6ba0ad15cc29c42930cc4) end up with the ETH?
3) Why did the console log transaction hash *0x228e7e8c70b1350382c7937e1b6ef15295e1b5729da92f7d82a90024c8e02b74* (and not the [correct one](https://etherscan.io/tx/0x570d1cf456a36d4a520c68d52905ab06ca8e09ef1f80d27d78d8907175a93358))
 
 
 
 ## Output
 
 Here is a subsection of console logs for the execution of the script, from the detection of block 12725319, to the 'execution' and logginf of transaction 
 
 ```
 
--------------------------------------------------

[6:48:11 PM] ✔ New Block: 12725321

--------------------------------------------------

[6:48:11 PM] ℹ Chainlink ETH price in USD: 2097
[6:48:12 PM] ℹ Uniswap ETH price in LUSD: 2146

--------------------------------------------------


--------------------------------------------------

[6:48:12 PM] ✔ Uniswap price is greater than Chainlink's

--------------------------------------------------

1
2
3
4
5
43294867731446303880199Amt out
[
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  'path'
]
0x8259196dfF5e10c54C66d6Aa531265f488918671to
43294867731446303880199 [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'
] 0x8259196dfF5e10c54C66d6Aa531265f488918671 1624921692 713187333333333332620
2
3
4
5
43709516897916394325455Amt out
[
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  'path'
]
0x8259196dfF5e10c54C66d6Aa531265f488918671to
43709516897916394325455 [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'
] 0x8259196dfF5e10c54C66d6Aa531265f488918671 1624921692 1069781000000000000000
2
3
4
5
44132185330006309445516Amt out
[
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  'path'
]
0x8259196dfF5e10c54C66d6Aa531265f488918671to
44132185330006309445516 [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'
] 0x8259196dfF5e10c54C66d6Aa531265f488918671 1624921692 2139562000000000000000
2
3
4
5
44203426080764679165155Amt out
[
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  'path'
]
0x8259196dfF5e10c54C66d6Aa531265f488918671to
44203426080764679165155 [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'
] 0x8259196dfF5e10c54C66d6Aa531265f488918671 1624921692 2567474400000000000000
2
3
4
5
44346599823073273522360Amt out
[
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
  'path'
]
0x8259196dfF5e10c54C66d6Aa531265f488918671to
44346599823073273522360 [
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'
] 0x8259196dfF5e10c54C66d6Aa531265f488918671 1624921692 4279124000000000000000
A(amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE)
got eth
profit4654169856630570
[6:48:12 PM] ‼ Initial: 0.333333333333333333 ETH; Uniswap Output: 713.18733333333333262 LUSD; Redeemed: 0.340038568631414044 ETH; Net Redeemed: 0.337987503189963903 ETH; Profit: 0.00465416985663057 ETH
Result
A(amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE)
got eth
profit6981131010231700
[6:48:12 PM] ‼ Initial: 0.5 ETH; Uniswap Output: 1069.781 LUSD; Redeemed: 0.510057852947121066 ETH; Net Redeemed: 0.5069811310102317 ETH; Profit: 0.0069811310102317 ETH
Result
A(amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE)
got eth
profit13961519372178471
[6:48:12 PM] ‼ Initial: 1.0 ETH; Uniswap Output: 2139.562 LUSD; Redeemed: 1.020115705894242133 ETH; Net Redeemed: 1.013961519372178471 ETH; Profit: 0.013961519372178471 ETH
Result
A(amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE)
got eth
profit16753466775437400
[6:48:12 PM] ‼ Initial: 1.2 ETH; Uniswap Output: 2567.4744 LUSD; Redeemed: 1.22413884707309056 ETH; Net Redeemed: 1.2167534667754374 ETH; Profit: 0.0167534667754374 ETH
Result
A(amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE)
got eth
profit27920068151217231
[6:48:12 PM] ‼ Initial: 2.0 ETH; Uniswap Output: 4279.124 LUSD; Redeemed: 2.040231411788484267 ETH; Net Redeemed: 2.027920068151217231 ETH; Profit: 0.027920068151217231 ETH
Result
try
try
try
try
try
[6:48:14 PM] ✔ Submitted Transaction!
Hash: 0x228e7e8c70b1350382c7937e1b6ef15295e1b5729da92f7d82a90024c8e02b74

```
 
