const axios = require('axios')
let yummlyApiId = null
let yummlyApiKey = null
require('./ApiKeys').then(keys => {
  yummlyApiId = keys.yummlyApiId
  yummlyApiKey = keys.yummlyApiKey
})

const RecipeController = {
    getRecipe: (id) => {
        return new Promise((resolve, reject) => {
            console.log(id)

            let yummlyUrl = RecipeController.yummlyUrl(id)

            axios.get(yummlyUrl)
                .then(function (response) {
                    resolve(response.data)
                });
        })

    },

    yummlyUrl: (id) => {
        return `http://api.yummly.com/v1/api/recipe/${id}?_app_id=${yummlyApiId}&_app_key=${yummlyApiKey}`
    }
}

module.exports = RecipeController