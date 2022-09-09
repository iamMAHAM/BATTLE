const pythagore = (object = {}, cote)=>{
    const RES = Math.sqrt(Math.pow(Object.values(object)[0], 2) + Math.pow(Object.values(object)[1], 2))
    return (`${cote} = ${RES}`)
}

pythagore({AB:8,BC:6}, "AC")
