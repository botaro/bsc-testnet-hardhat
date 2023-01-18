let i=require("../lib/ini")
let h=require("../lib/hd")
let c=require("../cnt/Sin").cnt
i.cl(c)

const Pcnt = new i.eth.Contract(c,h.Uabi,i.pro  )

let r=async()=>{
    let gp=await i.gp
    i.cl(gp)
let gp2=i.ut.formatUnits(gp,9)
i.cl(gp2)
let fee=await i.fee
    // let b1=i.ut.parseUnits("10")
    // let b2=i.ut.parseUnits("1","ether")
    // let b3=i.ut.parseUnits("10",9)
    // i.cl(b1)
    // i.cl(b2)
    // i.cl(b3)
    // let b4=i.ut.formatUnits(b1,9)
    // let b5=i.ut.formatUnits(b3,9)
    // i.cl(b4)
    // i.cl(b5)
    //let b5=Math.log10(b4)


}

r()

