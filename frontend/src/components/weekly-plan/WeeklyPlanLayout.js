import React from 'react';
import WeeklyPlan from './WeeklyPlan'
import { css } from 'react-emotion';
import { DotLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const WeeklyPlanLayout = (props) => {

    const { loading, weeklyPlan, extras, newTab, getAllRecipes, recipeList } = props

    const displayJSX = loading ? <div className='sweet-loading'>
        <DotLoader
            className={override}
            sizeUnit={"px"}
            size={150}
            color={'#4582ec'}
            loading={loading}
        />
    </div> : <WeeklyPlan newTab={newTab} weeklyPlan={weeklyPlan} extras={extras} getAllRecipes={getAllRecipes} recipeList={recipeList} show={recipeList.length > 0 ? true: false}/>

    return (
        (displayJSX)
    )
}

export default WeeklyPlanLayout