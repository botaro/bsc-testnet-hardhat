require("dotenv").config()
let e=process.env
let h=require("../lib/hd")
let eth=require("ethers").ethers
,cl=console.log
,jsbi=require("jsbi")
,ax=require("axios")
,dec=require("abi-decoder")
,ut=eth.utils
,bn=eth.BigNumber
,a2=process.argv[2]
,fs=require("fs")
,wr=fs.writeFileSync
,rd=fs.readFileSync
,sca="https://bscscan.com/"
,bsc="https://bsc-dataseed1.binance.org/"
,bst="https://data-seed-prebsc-1-s1.binance.org:8545/"
//,pro= new eth.providers.AlchemyProvider("maticmum",e.key)
,pro= new eth.providers.JsonRpcProvider(bst)
,fee=pro.getFeeData()
,wal=new eth.Wallet(e.pri,pro)
let Cwal=wal.connect(pro)
let pat={sources: "./sol",tests: "./tes",cache: "./cac",
artifacts: "./art"}
let dat=Math.floor(Date.now() / 1000) + (60 * 10)
let glim=eth.utils.hexlify(10**9)//gas limit
let gp=pro.getGasPrice()

let obj={cl:cl,eth:eth,ut:ut,jsbi:jsbi,dec:dec
,pro:pro,wal:wal,Cwal:Cwal
,bn:bn,ax:ax
,adr:e.adr,pri:e.pri
,wr:wr,rd:rd,a2:a2,sca:sca
,pat:pat,glim:glim,fee:fee
,dat:dat,gp:gp
    ,bsc:bsc,bst:bst
}

module.exports=obj
