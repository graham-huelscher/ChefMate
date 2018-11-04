import React from 'react';
import { Instructions, DailyRequirements, Diets, Allergies, MealsPerDay, IngredientFrequency, CuisineFrequency } from './index'
import { Switch, Route } from 'react-router-dom'
import { ingredientObject, cuisineObject } from './DATA'

const PreferencesLayout = (props) => {

    const { match, updateSearchObject, removeFromSearchObject, AppSearchObject, searchObject } = props
    const { calories, fat, protein, carbs, diets, allergies, mealsPerDay, ingredients, cuisines } = searchObject

    return (
        <Switch>
            <Route path={match.url + '/instructions/'} component={Instructions} />
            <Route path={match.url + '/daily-requirements/'} render={() => <DailyRequirements
                removeFromSearchObject={removeFromSearchObject}
                updateSearchObject={updateSearchObject}
                calories={calories}
                fat={fat}
                protein={protein}
                carbs={carbs} />} />
            <Route path={match.url + '/diets/'} render={() => <Diets diets={diets} updateSearchObject={updateSearchObject} />} />
            <Route path={match.url + '/allergies/'} render={() => <Allergies allergies={allergies} updateSearchObject={updateSearchObject} />} />
            <Route path={match.url + '/meals-per-day/'} render={() => <MealsPerDay mealsPerDay={mealsPerDay} updateSearchObject={updateSearchObject} />} />
            <Route path={match.url + '/ingredient-frequency/'} render={() =>
                <IngredientFrequency
                    ingredients={ingredients}
                    frequencyObject={ingredientObject}
                    updateSearchObject={updateSearchObject}
                />} />
            <Route path={match.url + '/cuisine-frequency/'} render={() =>
                <CuisineFrequency
                    cuisines={cuisines}
                    frequencyObject={cuisineObject}
                    updateSearchObject={updateSearchObject}
                    AppSearchObject={AppSearchObject}

                />}
            />
        </Switch>
    )
}

export default PreferencesLayout