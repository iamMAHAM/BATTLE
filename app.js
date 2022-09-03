const primeNumber = (n)=>{
    let i = 2
    const numbers = []
    const primes = []
    const div = []
    while (i < n){
        numbers.push(i)
        i++
    }
    numbers.map(n=> {
        let i  = 2
        let flag = false
        while (i < n){
            if (n % i === 0){
                flag = true
            }
            i++
        }
        flag ? '' : primes.push(n)
    })
    let total = 0
    primes.map(n => total += n)

    let j = 1
    while (j < total){
        (total % j) === 0 ? div.push(j) : ''
        j++
    }
    console.log(primes.join(", "))
    console.log(div.join(" "))

}

primeNumber(10)

