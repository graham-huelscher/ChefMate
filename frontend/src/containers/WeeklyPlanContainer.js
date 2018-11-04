import React, { Component } from 'react'
import WeeklyPlanController from '../controllers/WeeklyPlanController'
import WeeklyPlanLayout from '../components/weekly-plan/WeeklyPlanLayout'


class WeeklyPlanContainer extends Component {
  state = {
    weeklyPlan: null,
    extras: null,
    loading: true,
    recipeList: []
  }

  componentDidMount() {
    WeeklyPlanController
      .getWeeklyPlan(this.props.searchObject)
      .then(weeklyPlan => {
        const { extras } = weeklyPlan
        delete weeklyPlan.extras
        this.setState({
          extras,
          weeklyPlan
        }, () => this.mealCheck(0))
      })
  }

  mealCheck = (count) => {
    const sunday = this.state.weeklyPlan.sunday
    const { mealsPerDay } = this.props.searchObject
    const missingMeals = []

    if (!sunday.lunch)
      missingMeals.push('lunch')

    if (!sunday.dinner)
      missingMeals.push('dinner')

    if (!sunday.side)
      missingMeals.push('side')

    if (!sunday.breakfast && mealsPerDay >= 3)
      missingMeals.push('breakfast')

    if (!sunday.snack && mealsPerDay === 4)
      missingMeals.push('snack')

    console.log(missingMeals)
    console.log(count)

    if (missingMeals.length > 0 && count < 3) {
      WeeklyPlanController.getWeeklyPlan(this.props.searchObject).then(weeklyPlan => {
        const { extras } = weeklyPlan
        delete weeklyPlan.extras
        let weeklyPlanUpdate = { ...this.state.weeklyPlan }

        for (let day in weeklyPlanUpdate) {
          missingMeals.forEach(meal => weeklyPlanUpdate[day][meal] = weeklyPlan[day][meal])
        }

        console.log(weeklyPlanUpdate)

        this.setState({
          weeklyPlan: weeklyPlanUpdate,
          extras
        }, () => this.mealCheck(++count))
      })
    }
    else
      this.setState({
        loading: false
      })
  }

  newTab = (id) => {
    WeeklyPlanController.getRecipe(id).then(recipeObject => window.open(recipeObject.source.sourceRecipeUrl))
  }

  getAllRecipes = () => {
    WeeklyPlanController
    .getAllRecipes(this.state.weeklyPlan)
    .then(recipeList => this.setState({recipeList}))
  }



  render() {

    return (
      <WeeklyPlanLayout
        {...this.state}
        newTab={this.newTab}
        getAllRecipes={this.getAllRecipes}
      />
    )
  }
}

export default WeeklyPlanContainer