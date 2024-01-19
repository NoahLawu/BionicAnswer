function substract(...temp) {
    // temp.reduce((a, b) => a - b)
    let max = Math.max(...temp)
    let minNumber = temp[2]
    result = max - minNumber
    console.log(result)
}
let temp = [10, 7, 5, 8, 11, 9, 1]

console.log("🚀 ~ substract:", substract(...temp))