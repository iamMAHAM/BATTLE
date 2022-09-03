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
        let i  = 0
        let flag = false
        while (i < n){
            if (n % i === 0){
                flag = true
            }
        }
        flag ? '' : primes.push(n)
    })
    let total = 0
    primes.map(n => total += n)

    let j = 0
    while (j < total){
        (total % j) === 0 ? div.push(j) : ''
    }

    return `${primes}, "${div}"`

}

let result = primeNumber(10)
console.log(result)

