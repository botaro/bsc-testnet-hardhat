
let i=require("../lib/ini")
if(i.a2){
let c=require("../cnf/"+i.a2)
i.cl(c.cnt)
}else{ i.cl(999)}
