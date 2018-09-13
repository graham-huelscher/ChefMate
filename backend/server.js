const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
const SearchController = require('./controllers/search_controller')
const RecipeController = require('./controllers/recipe_controller')

searchObject = {
    diets: ['403^Paleo'],
    allergies: ['394^Peanut-Free'],
    ingredients:
    {
        regularly: ['chicken breasts', 'sushi grade tuna'],
        occasionally: [],
        infrequently: [],
        never: ['mushrooms', ]
    },
    cuisines:
    {
        regularly: [],
        occasionally: [],
        infrequently: [],
        never:
            ['cuisine^cuisine-mexican']
    },
    mealsPerDay: 4
}

// Middleware
app.use(bodyParser.json())

// Routes
//app.use('/search', require('./routes/search_endpoints'))

app.post('/search', (req, res) => {

    console.log(req.body.searchObject)

    SearchController
        .searchRecipes(req.body.searchObject)
        .then(weeklyPlan => res.json(weeklyPlan))
})

app.get('/recipe/:id', (req, res) => {
    let id = req.params.id
    RecipeController
        .getRecipe(id)
        .then(recipeUrl => res.json(recipeUrl))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})