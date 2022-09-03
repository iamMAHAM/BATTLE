const arrayFunc = (array = [])=>{
    let flag = false
    array.map(n => {
        if (typeof n !== "number") flag = true
    })
    if (flag) return -1
    const positifs = array.filter(n => n >= 0)
    const negatifs = array.filter(n => n < 0)
    let res = ""
    let total_pos = 0, total_neg = 0
    let diff = 0
    positifs.map(n => total_pos += n)
    negatifs.map(n => total_neg += n)

    diff = total_pos + total_neg
    console.log(diff)

    if (diff > 0) res = "positif"
    else if (diff < 0) res = "négatif"
    else res = "égaux"
    return `${total_pos}, ${total_neg}, ${res}`
}

let rs = arrayFunc([7,-9,6,2,-8, "efez"])
console.log(rs)