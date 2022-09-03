const function4 = (string)=>{
    let reversed = ""
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let replaced = ""
    let voyelle = 0
    let consonne = 0
    let sup = ""
    let total = 0

    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i]
        "aeuioy".includes(string[i]) ? voyelle += 1 : consonne +=1
    }
    for (let i = 0; i < string.length; i++){
        let index = alphabet.indexOf(string[i])
        replaced += (index + 1)
        "aeuioy".includes(string[i])
    }
    if (voyelle > consonne) sup = "voyelle"
    else if (voyelle < consonne) sup = "consonne"
    else sup = egaux


    return (`${reversed}, ${replaced}, ${consonne} et ${voyelle}, ${sup}`)

}

let result = function4("bingerville")
console.log(result)