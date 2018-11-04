import React from 'react';
import PageNav from './PageNav'
import './css/instructions.css'

const Instructions = () => {
    return (
        <div>
            <PageNav next='daily-requirements' />
            <article>
                <h3>In the next couple steps we'll gather some food preferences from you and provide you with a custom tailored weekly meal plan!</h3>
            </article>


        </div>)
}


export default Instructions