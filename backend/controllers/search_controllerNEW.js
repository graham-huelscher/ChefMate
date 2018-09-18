const axios = require('axios')
const { Day, weeklyPlan } = require('../model')
const { yummlyApiId, yummlyApiKey } = require('./ApiKeys')

const SearchController = {
  
  searchRecipes: (searchObject) => {
    return new Promise((resolve, reject) => {

      const { mealsPerDay } = searchObject

      let apiCalls = SearchController.getApiCalls(searchObject)

      axios.all(apiCalls)
        .then(axios.spread(function () {

          let argumentsArr = []
          for (let key in arguments)
            argumentsArr.push(arguments[key])

          const lunchResponse = arguments[0]
          const dinnerResponse = arguments[1]
          const sideResponse = arguments[2]
          let breakfastResponse = null
          let snackResponse = null

          let startingPoint = 3
          switch (mealsPerDay) {
            case 3:
              breakfastResponse = arguments[3]
              startingPoint = 4
              break
            case 4:
              breakfastResponse = arguments[3]
              snackResponse = arguments[4]
              startingPoint = 5
              break
          }

          let ingredientResponses = null
          if (arguments.length > startingPoint) {
            ingredientResponses = argumentsArr.slice(startingPoint, arguments.length)
          }


          const { recipes, recipesWithIng } = SearchController.createRecipeObjects(
            lunchResponse,
            dinnerResponse,
            sideResponse,
            breakfastResponse,
            snackResponse,
            ingredientResponses
          )

          let searchTooStrict = false
          if (!recipesWithIng.lunch && !recipesWithIng.dinner)
            searchTooStrict = true

          let weeklyPlan = SearchController.createWeeklyPlan(recipes, recipesWithIng, searchTooStrict)

          resolve(weeklyPlan)
        }));
    })

  },

  getApiCalls: (searchObject) => {
    const {
      breakfastString,
      lunchString,
      dinnerString,
      sideString,
      snackString,

      lunchArrWithAllowedIng,
      dinnerArrWithAllowedIng
    } = SearchController.getAllSearchStrings(searchObject)

    const lunchCallsWithAllowedIng = lunchArrWithAllowedIng.map(string => SearchController.yummlyCall(string))
    const dinnerCallsWithAllowedIng = dinnerArrWithAllowedIng.map(string => SearchController.yummlyCall(string))

    let apiCalls = [
      SearchController.yummlyCall(lunchString),
      SearchController.yummlyCall(dinnerString),
      SearchController.yummlyCall(sideString)
    ]

    switch (searchObject.mealsPerDay) {
      case 3:
        apiCalls.push(SearchController.yummlyCall(breakfastString))
        break
      case 4:
        apiCalls.push(SearchController.yummlyCall(breakfastString))
        apiCalls.push(SearchController.yummlyCall(snackString))
        break
    }

    apiCalls = apiCalls.concat(lunchCallsWithAllowedIng).concat(dinnerCallsWithAllowedIng)
    return apiCalls
  },
  createRecipeObjects: (lunchResponse, dinnerResponse, sideResponse, breakfastResponse, snackResponse, ingredientResponses) => {

    let recipes = {
      lunch: lunchResponse.data.matches,
      dinner: dinnerResponse.data.matches,
      side: sideResponse.data.matches
    }
    if (breakfastResponse) {
      recipes.breakfast = breakfastResponse.data.matches
    }
    if (snackResponse) {
      recipes.snack = snackResponse.data.matches
    }

    let lunchWithIngMatches = []
    let dinnerWithIngMatches = []

    let tempLunch = []
    let tempDinner = []

    if (ingredientResponses) {
      ingredientResponses.forEach(response => {
        if (response.request._header.includes('allowedCourse[]=course%5Ecourse-Main%20Dishes'))
          tempDinner = tempDinner.concat(response.data.matches)
        else if (response.request._header.includes('allowedCourse[]=course%5Ecourse-Lunch'))
          tempLunch = tempLunch.concat(response.data.matches)
      })
      while (tempLunch.length > 0) {
        let randomIndex = Math.floor(Math.random() * tempLunch.length)
        let meal = tempLunch.splice(randomIndex, 1)[0]
        lunchWithIngMatches.push(meal)
      }
      while (tempDinner.length > 0) {
        let randomIndex = Math.floor(Math.random() * tempDinner.length)
        let meal = tempDinner.splice(randomIndex, 1)[0]
        lunchWithIngMatches.push(meal)
      }
    }

    recipesWithIng = {
      lunch: lunchWithIngMatches,
      dinner: dinnerWithIngMatches
    }

    return { recipes, recipesWithIng }
  },
  createWeeklyPlan: (recipes, recipesWithIng, searchTooStrict) => {
    let counter = 0
    for (let day in weeklyPlan) {
      let lunch = null
      let dinner = null
      if (searchTooStrict) {
        lunch = recipes.lunch.shift()
        dinner = recipes.dinner.shift()
      }
      else {
        if (counter % 2 === 0 && recipesWithIng.lunch.length > 0 && recipesWithIng.dinner.length > 0) {
          lunch = recipesWithIng.lunch.shift()
          dinner = recipesWithIng.dinner.shift()
        }
        else if (counter % 2 === 0 && recipesWithIng.lunch.length > 0) {
          lunch = recipesWithIng.lunch.shift()
          dinner = recipes.dinner.shift()
        }
        else if (counter % 2 === 0 && recipesWithIng.dinner.length > 0) {
          dinner = recipesWithIng.dinner.shift()
          lunch = recipes.lunch.shift()
        }
        else {
          lunch = recipes.lunch.shift()
          dinner = recipes.dinner.shift()
        }
      }
      weeklyPlan[day] = new Day(
        lunch,
        dinner,
        recipes.side.shift(),
        recipes.breakfast ? recipes.breakfast.shift() : false,
        recipes.snack ? recipes.snack.shift() : false
      )
      counter++
      console.log(day)
      console.log('lunch: ' + weeklyPlan[day].lunch)
      console.log('dinner: ' + weeklyPlan[day].dinner)
      console.log('side: ' + weeklyPlan[day].side)
      console.log('breakfast: ' + weeklyPlan[day].breakfast)
      console.log('snack: ' + weeklyPlan[day].snack)
    }
    weeklyPlan.extras = recipes
    return weeklyPlan
  },
  yummlyCall: (searchString) => {
    return axios.get(`https://api.yummly.com/v1/api/recipes?_app_id=${yummlyApiId}&_app_key=${yummlyApiKey}&maxResult=100&${searchString}`)
  },
  getAllSearchStrings: (searchObject) => {
    const searchString = SearchController.searchStringBuilder(searchObject)
    console.log(searchString)

    const searchArrWithAllowedIngredients = SearchController.searchStringWithAllowedIngredients(searchObject, searchString)

    return {
      breakfastString: SearchController.breakfastString(searchString),
      lunchString: SearchController.lunchString(searchString),
      dinnerString: SearchController.dinnerString(searchString),
      sideString: SearchController.sideString(searchString),
      snackString: SearchController.snackString(searchString),

      lunchArrWithAllowedIng: searchArrWithAllowedIngredients.map(string => SearchController.lunchString(string)),
      dinnerArrWithAllowedIng: searchArrWithAllowedIngredients.map(string => SearchController.dinnerString(string))
    }
  },
  searchStringWithAllowedIngredients: (searchObject, searchString) => {
    return searchObject.ingredients.regularly.map(ingredient => searchString + `allowedIngredient[]=${ingredient}&`)
  },
  searchStringBuilder: (searchObject) => {
    const { ingredients, allergies, diets, cuisines } = searchObject

    const allergiesString = allergies.reduce((str, allergy) => str + `allowedAllergy[]=${allergy}&`, '')
    const dietsString = diets.reduce((str, diet) => str + `allowedDiet[]=${diet}&`, '')
    const ingredientsString = ingredients.never.reduce((str, ingredient) => str + `excludedIngredient[]=${ingredient}&`, '')
    const cuisinesString = cuisines.never.reduce((str, cuisine) => str + `excludedCuisine[]=${cuisine}&`, '')

    return searchString = `${allergiesString}${dietsString}${ingredientsString}${cuisinesString}`

  },
  breakfastString: (searchString) => {
    return searchString + 'allowedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails&excludedCourse[]=course^course-Snacks'
  },
  lunchString: (searchString) => {
    return searchString + 'allowedCourse[]=course^course-Lunch&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails&excludedCourse[]=course^course-Snacks'
  },
  dinnerString: (searchString) => {
    return searchString + 'allowedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Appetizers&excludedCourse[]=course^course-Salads&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Soups&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails&excludedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Lunch'
  },
  sideString: (searchString) => {
    return searchString + 'allowedCourse[]=course^course-Appetizers&allowedCourse[]=course^course-Side Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails&excludedCourse[]=course^course-Snacks'
  },
  snackString: (searchString) => {
    return searchString + 'allowedCourse[]=course^course-Snacks&excludedCourse[]=course^course-Main Dishes&excludedCourse[]=course^course-Desserts&excludedCourse[]=course^course-Breakfast and Brunch&excludedCourse[]=course^course-Breads&excludedCourse[]=course^course-Beverages&excludedCourse[]=course^course-Condiments and Sauces&excludedCourse[]=course^course-Cocktails&excludedCourse[]=course^course-Lunch'
  }

}

module.exports = SearchController