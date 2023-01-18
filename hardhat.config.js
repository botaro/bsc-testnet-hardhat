require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
let vstr="0.7.5"
let e=process.env
let i=require("./lib/ini")
let def="bst"
let ver={version:vstr}
let obj= {
defaultNetwork:def,
networks:{
hardhat:{},
bsc: {
url:i.bsc,
accounts: [e.pri]
},
bst: {
url:i.bst,
accounts: [e.pri]
}
},
solidity:ver,
paths:i.pat,
etherscan:i.sca
}

module.exports = obj
