let i=require("../lib/ini")
let h=require("../lib/hd")
let { getP, getS} = require('../lib/hel')
let Pcnt = new i.eth.Contract(h.Padr,h.Uabi,i.pro  )
let Cwal = i.wal.connect(i.pro)
let sCnt = new i.eth.Contract(h.Radr,h.Sabi,i.pro  )
let Imnt= 0.005
let Mntin= i.eth.utils.parseUnits(Imnt.toString(),18)//mnt in
let Amnt = (Mntin* 100000).toString() //approved amount
i.cl(Amnt)
let Glim=i.eth.utils.hexlify(5000000)
let Topt={gasLimit:Glim} 

let r=async()=> {
let tCnt0 = new i.eth.Contract(h.mat,h.Eabi,i.pro)
await tCnt0.connect(cWal).approve(h.Radr,Amnt  )
let Ares = await tCnt0.connect(cWal).approve(h.Radr,Amnt  )
let mut = await getP(Pcnt)

let par = {
tokenIn: mut.token1,
tokenOut: mut.token0,
fee: mut.fee,
recipient:i.adr,
deadline: Math.floor(Date.now() / 1000) + (60 * 10),
amountIn: Mntin,
amountOutMinimum: 0,
sqrtPriceLimitX96: 0,
}
i.cl(par)

// let trx= sCnt.connect(Cwal).exactInputSingle(par,Topt)
// .then(trx=>   i.cl(trx)  )
// .catch(e=>i.cl(e) )

}//r()

 r()
