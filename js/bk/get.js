let i=require("./ini")

let goe=require("../cnf/goe")
let son=require("../son/met")
let adr=goe.adr
let cadr="0x3938984d5f2f1c9fe3a5bcd3220ebb6c696b99ed"
let cad2="0xcea3c42b59286bdc38ce0a803bde1b547cee8bf0"
let key=Object.keys(son)
let ent=Object.entries(son)
let nam=son.contractName
let cnt=new i.eth.Contract(cad2,son.abi,i.wal)
// i.cl(cnt)

let r=async()=>{
let adr=await cnt.address
let fun=await cnt.functions
i.cl(adr)

let fac=await i.eth.getContractFactory(adr)
i.cl(fac)

// let n=await cnt.getBalance(adr)
// i.cl(n)

}

r()

