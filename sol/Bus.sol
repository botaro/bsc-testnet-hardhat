// SPDX-License-Identifier:MIT
pragma solidity =0.7.5;
pragma abicoder v2;
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "./IE.sol";
contract Bus{
address public constant Radr =0xE592427A0AEce92De3Edee1F18E0157C05861564;
ISwapRouter public immutable Srt = ISwapRouter(Radr);
address public constant BUS =0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814;
address public constant BNB =0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
IERC20 public Ltok = IERC20(BUS);
// For this example, we will set the pool fee to 0.3%.
uint24 public constant poolFee = 3000;
constructor() {}
function swapExactInputSingle(uint256 amountIn) external
returns (uint256 amountOut) {
Ltok.approve(address(Srt), amountIn);
ISwapRouter.ExactInputSingleParams memory par= ISwapRouter.ExactInputSingleParams(
{tokenIn: BUS,tokenOut: BNB,
fee: poolFee,recipient: address(this),
deadline: block.timestamp,
amountIn: amountIn,amountOutMinimum: 0,sqrtPriceLimitX96: 0
});
amountOut = Srt.exactInputSingle(par);
}

}
