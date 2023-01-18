let i=require("../lib/ini")
let h=require("../lib/hd")
let c=require("../cnt/Sin").cnt
let n="Ust"
let abi=require("../art/sol/"+n+".sol/"+n+".json").abi
let Pcnt = new i.eth.Contract(c,abi,i.wal)

let r=async()=> {
let Pfee=await Pcnt.poolFee()
let Dcnt=new i.eth.Contract(h.dai,h.Eabi,i.pro)
let mnt="0.01"
let Min= i.eth.utils.parseUnits(mnt,18)//mnt in
i.cl(Min)
let Apm=mnt*10**9
let app=await Dcnt.connect(i.Cwal).approve(h.Radr,Apm)
//i.cl(app)
let fee=await i.fee
let mf=fee.maxFeePerGas
let mp=fee.maxPriorityFeePerGas
let b3=i.ut.parseUnits("100",9)
let b4=i.ut.parseUnits("10",9)
let Topt={gasLimit:i.glim,maxFeePerGas:b3, 
maxPriorityFeePerGas:b4} 
let par = {
tokenIn:h.dai,tokenOut:h.weth,fee: Pfee,
recipient:i.adr,deadline:i.dat, 
amountIn: Min,amountOutMinimum: 0,sqrtPriceLimitX96: 0,
}

let tx=i.Scnt.connect(i.Cwal).exactInputSingle(par,Topt)
.then(tx=>   i.cl(tx)  )
.catch(e=>i.cl(e) )

}//r()
r()
