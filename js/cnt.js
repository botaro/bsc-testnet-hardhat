
let i=require("../lib/ini")
if(i.a2){
let Cadr=require("../cnt/"+i.a2).cnt
let abi=require("../art/sol/"+i.a2+".sol/"+i.a2+".json").abi

let Pcnt = new i.eth.Contract(Cadr,abi,i.wal)
let k=Object.keys(Pcnt)
// i.cl(k)

let r=async()=>{
    let Pfee=await Pcnt.poolFee()
    let bus=await Pcnt.BUS()
    let bnb=await Pcnt.BNB()
    i.cl(bus)
    i.cl(bnb)
    i.cl(Pfee)
}
r()

}else{ i.cl(999)}
