let i=require("./ini")
if(i.a2){
let n=i.a2.charAt(0).toUpperCase()+i.a2.slice(1)
,son=require("../art/sol/"+i.a2+".sol/"+n)

i.cl(son.bytecode)
}else{i.cl(99)}
