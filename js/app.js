let i=require("../lib/ini")
let h=require("../lib/hd")
let n="Ust"
let c=require("../cnt/"+n).cnt
let abi=require("../art/sol/"+n+".sol/"+n+".json").abi
let Pcnt = new i.eth.Contract(c,abi,i.wal)

let r=async()=> {
let Pfee=await Pcnt.poolFee()
let Ucnt=new i.eth.Contract(h.usdt,h.Eabi,i.pro)
let mnt="0.1"
let Min= i.eth.utils.parseUnits(mnt,18)//mnt in
i.cl(Min)
let Apm=mnt*10**9
let app=await Ucnt.connect(i.Cwal).approve(h.Radr,Apm)
i.cl(app)

}//r()
r()
