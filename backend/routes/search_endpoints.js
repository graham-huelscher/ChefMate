const express = require('express')
const router = express.Router()
const SearchController = require('../controllers/search_controller')

router.get('/', (req, res) => {
    SearchController
        .searchRecipes(req.body)
        .then(recipes => res.json(recipes))
})

// router.post('/', (req, res) => {
//     const { text } = req.body
//     TodosController
//         .addTodo(text)
//         .then(todo => res.json(todo))
// })


module.exports = router