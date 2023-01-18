let i=require("../lib/ini")
let hre=require("hardhat")

if(i.a2) {

let son=require("../art/sol/"+i.a2+".sol/"+i.a2+".json")
let main=async()=>{
const stamp = Math.round(Date.now() / 1000);
const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
const utim= stamp + ONE_YEAR_IN_SECS;
let mnt=hre.ethers.utils.parseEther("0.01")
let Cnt=await hre.ethers.getContractFactory(i.a2)
let cnt=await Cnt.deploy()
await cnt.deployed()
i.cl(cnt.address)
}
main()

}else{i.cl(999)}
