// SPDX-License-Identifier:MIT
pragma solidity =0.7.5;

interface IERC20 {
function balanceOf(address account) external view returns (uint256);
function transfer(address recipient, uint256 amount)external returns (bool);
function approve(address spender, uint256 amount) external returns (bool);
}

