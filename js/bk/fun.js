let i=require("./ini")

if(i.a2){
let cAdr=require("../cnt/"+i.a2).cnt
,n=i.a2.charAt(0).toUpperCase()+i.a2.slice(1)
,son=require("../art/sol/"+i.a2+".sol/"+n)

let r=async()=>{let cnt=await new i.eth.Contract(cAdr,son.abi,i.wal)
,adr=await cnt.address
,fun=await cnt.functions

i.cl(adr)
i.cl(fun)

}

r()

}else{i.cl("no a2")}
