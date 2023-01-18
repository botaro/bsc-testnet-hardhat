let i=require("./ini")
,hre=require("hardhat")

let son=require("../son/FlaTes.json")
i.cl(son.abi)

let main=async()=>{

let Cnt=await hre.ethers.getContractFactory(son.abi,son.bytecode,i.wal)
i.cl(Cnt)
// let cnt=await Cnt.deploy()
// await cnt.deployed()

// i.cl(cnt.address)

}

main()

