function doubleStar(input) {
    for (let i = 1; i <= input; i++) {
        let line = 1;
        for (let j = 0; j < input; j++) {
            line += `${i}** `
        }
        console.log(line)
    }
}
console.log("🚀 ~ doubleStar:", doubleStar(5))