const fs = require('fs')
console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile("no-existe.txt", 'utf8', (err, res) => {
    if (err) {
        console.log(err.message)
    }
    console.log(res)
})
const texto = fs.readFileSync("no-existe.txt", 'utf-8', (err, res) => {
    if (err) {
        console.log(err.message)
    }
    console.log(res)
})
console.log('D', texto.length > 0)