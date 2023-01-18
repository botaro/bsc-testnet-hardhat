
let i=require("../lib/ini")
let h=require("../lib/hd")
let fac=new i.eth.Contract(h.Fadr,h.Fabi,i.pro)
let k=Object.keys(fac)
i.cl(k)

let r=async()=>{
let Padr=await fac.functions.getPool(h.Bus,h.Bnb,3000)
i.cl(Padr)


}
r()

