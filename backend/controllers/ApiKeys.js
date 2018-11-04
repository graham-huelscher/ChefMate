const fs = require('fs')

let keys = new Promise(function (resolve, reject) {
    fs.readFile('./controllers/ApiKeys.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        else {
            const keys = data.split('/')
            resolve(
                {
                    yummlyApiId: keys[0],
                    yummlyApiKey: keys[1]
                }
            )
        }
    })
})

module.exports = keys

