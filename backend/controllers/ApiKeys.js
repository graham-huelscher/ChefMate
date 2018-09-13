const fs = require('fs')

let yummlyApiId = null
let yummlyApiKey = null

fs.readFile('./controllers/ApiKeys.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const keys = data.split('/')

    yummlyApiId = keys[0]
    yummlyApiKey = keys[1]
})


module.exports = {
    yummlyApiId,
    yummlyApiKey
}