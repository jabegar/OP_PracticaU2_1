const fs = require('fs')
console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile("noexiste.txt", 'utf8', (err, res) => {
    if (err) {
        console.log("Error de archivo: ", err.message)
        return err
    }
    console.log(res)
    return res
})
const texto = fs.readFileSync(__filename, 'utf8')
console.log('D', texto.length > 0)