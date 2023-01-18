let i=require("./ini")
let goe=require("../cnf/goe")
let son=require("../son/met")
let cadr="0x3938984d5f2f1c9fe3a5bcd3220ebb6c696b99ed"
let cad2="0xcea3c42b59286bdc38ce0a803bde1b547cee8bf0"

let r=async()=>{
let acc=await i.eth.provider.listAccounts()
    i.cl(acc)
}

// r().then( ()=>process.exit(0) )
//     .catch(e=>i.cl(e) )
