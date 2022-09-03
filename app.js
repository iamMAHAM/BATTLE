const pythagore = (object = {}, cote)=>{
    const AC = Math.sqrt(Math.pow(object["AB"], 2) + Math.pow(object["BC"], 2))
    console.log(`${cote} = ${AC}`)
}

pythagore({AB:8,BC:6}, "AC")