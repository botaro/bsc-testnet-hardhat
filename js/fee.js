let i=require("../lib/ini")
let h=require("../lib/hd")
let c=require("../cnt/Sin").cnt
i.cl(c)

const Pcnt = new i.eth.Contract(c,h.Uabi,i.pro  )

let r=async()=>{
let fee=await i.fee
i.cl(fee)
let p1=i.ut.parseUnits("10",9) 
i.cl(p1)

i.cl("=== maxFeePerGas")
    let mf=fee.maxFeePerGas
    let Fmf=i.ut.formatUnits(mf,"gwei")
    let Fm2=mf.toNumber()
    let Fm3=Fm2*10
    let Fm4=Fm3.toString()
i.cl(Fmf+" gwei")
i.cl(Fm2)
i.cl(Fm3)
i.cl(Fm4)
i.cl("=== maxPriorityFeePerGas")
    let mp=fee.maxPriorityFeePerGas
    let Fmp=i.ut.formatUnits(mp,9)
    let Fp2=i.ut.formatUnits(mp)
i.cl(Fmp)
i.cl(Fp2)
i.cl("=== lastBaseFeePerGas")
    let gf=fee.lastBaseFeePerGas
    let Fgf=i.ut.formatEther(gf)
i.cl(Fgf)
i.cl("=== gasPrice")
    let gp=fee.gasPrice
    let Fgp=i.ut.formatEther(gp)
i.cl(Fgp)
i.cl("=== gwei")
    let b3=i.ut.parseUnits("10",9)
    let b4=i.ut.formatUnits(b3)
    i.cl(b3)
    i.cl(b4)

}

r()

