let pri=require("./goe").pri
let nw= {
loc: {url: "http://127.0.0.1:8545",
gasPrice: 2*1000*1000*1000,
accounts: [pri]
},
goe: {url:"https://eth-goerli.g.alchemy.com/v2/D6OuMHQ4kc-i-o8Ba1u-oRFmmQu81r8C",
gasPrice: 20*1000*1000*1000,
accounts: [pri]
},
tes: {url: "https://data-seed-prebsc-1-s1.binance.org:8545",
chainId: 97,
gas: 21001001000,
gasPrice: 21001001000,
accounts: [pri]
},
bsc: {
url: "https://bsc-dataseed.binance.org/",
chainId: 56,
gasPrice: 20*1000*1000*1000,
accounts:[pri] 
},
mum: {url:"https://rpc-mumbai.maticvigil.com",
gasPrice: 200*1000*1000*1000,
accounts: [pri]
},
mat: {url:"https://rpc-mainnet.maticvigil.com",
gasPrice: 200*1000*1000*1000,
accounts: [pri]
}
}

module.exports=nw
