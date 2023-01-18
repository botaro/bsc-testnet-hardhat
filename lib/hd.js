let v3c="@uniswap/v3-core/"
let v3p="@uniswap/v3-periphery/"
let sdk="@uniswap/v3-sdk"
let cnt=v3c+"artifacts/contracts/"
let int=cnt+"interfaces/"
let Pabi=require(int+"IUniswapV3Pool.sol/IUniswapV3Pool.json").abi
let Fadr="0x1F98431c8aD98523631AE4a59f267346ea31F984" //uniswapv3 fac
let Fabi=require(cnt+"UniswapV3Factory.sol/UniswapV3Factory.json").abi
let Eabi=require(int+"IERC20Minimal.sol/IERC20Minimal.json")
let Sabi=require(v3p+"artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json").abi

let Tmat=require(sdk).TickMath
let Fmat=require(sdk).FullMath
// cnt adr
let Radr="0xE592427A0AEce92De3Edee1F18E0157C05861564" //swap router address
let Rad2="0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45" //rt2
//bsc
let Bus="0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814"
let Bnb="0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
let obj={Pabi:Pabi,Sabi:Sabi,Fabi:Fabi,Eabi:Eabi,
    Tmat:Tmat,Fmat:Fmat,
    Radr:Radr,Rad2:Rad2,Fadr:Fadr,
    Bnb:Bnb,Bus:Bus
}

module.exports=obj

