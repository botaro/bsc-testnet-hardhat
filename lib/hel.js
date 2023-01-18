exports.getP= async(pcnt)=> {
  const [token0, token1, fee] = await Promise.all([
    pcnt.token0(),
    pcnt.token1(),
    pcnt.fee()
])

  const immutables = {
    token0: token0,
    token1: token1,
    fee: fee
  }
  return immutables
}

exports.getS= async (pcnt) => {
  const slot = pcnt.slot0()

  const state = {
    sqrtPriceX96: slot[0]
  }

  return state
}


exports.getT= async(pcnt)=> {
let t0=pcnt.token0()
    return t0
}
