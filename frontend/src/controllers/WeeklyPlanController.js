import axios from 'axios'

const WeeklyPlanController = {
  getWeeklyPlan: (searchObject) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/search', {
          searchObject
        })
        .then(response => resolve(response.data))
    })
  },
  getRecipe: (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/recipe/${id}`)
        .then(response => resolve(response.data))
    })
  },
  getAllRecipes: (weeklyPlan) => {

    return new Promise((resolve, reject) => {
      let promisesArray = []
      for (let day in weeklyPlan) {
        for (let meal in weeklyPlan[day]) {
          if (weeklyPlan[day][meal])
            promisesArray.push(WeeklyPlanController.getRecipe(weeklyPlan[day][meal].id))
        }
      }
      Promise.all(promisesArray).then((values) => resolve(WeeklyPlanController.getGroceryList(values)))
    })
  },
  getGroceryList: (recipes) => {
    const groceryList = {}

    recipes.forEach(recipe => {
      recipe.ingredientLines.forEach(ingredient => {
        ingredient = ingredient.toLowerCase()
        let quantity = null
        let tempArr = ingredient.split(' ')
        let firstItem = tempArr.slice(0, 1)[0]
        if (!isNaN(firstItem))
          groceryList[tempArr.slice(1, tempArr.length).join(' ')] = groceryList[tempArr.slice(1, tempArr.length).join(' ')] + Math.round(Number(firstItem)*100)/100 || Math.round(Number(firstItem)*100)/100
        else {
          const split = firstItem.split('/')
          if (split[0] === firstItem) {
            groceryList[ingredient] = groceryList[ingredient] + 1 || 1
          }
          else {
            quantity = Math.round(parseInt(split[0], 10) / parseInt(split[1], 10) *100)/100
            if (!isNaN(quantity))
              groceryList[tempArr.slice(1, tempArr.length).join(' ')] = groceryList[tempArr.slice(1, tempArr.length).join(' ')] + quantity || quantity
            else
              groceryList[ingredient] = groceryList[ingredient] + 1 || 1
          }
        }
      })
    })
    let listArray = []
    for (let ingredient in groceryList)
      listArray.push(groceryList[ingredient] + ': ' + ingredient + '\n')
    return listArray

  }
}

export default WeeklyPlanController