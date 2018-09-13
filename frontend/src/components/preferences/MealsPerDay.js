import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MealsPerDay = props => {
    const { updateSearchObject, mealsPerDay } = props
    return (
        <div>

            <nav className="navbar-fixed-top pageButtonsNav">
                <div className="container">
                    <ul className="pager">
                        <li className="previous">
                            <Link to={'/preferences/allergies/'}>
                                Previous
                        </Link>
                        </li>
                        <li className="next">
                            <Link to={'/preferences/ingredient-frequency/'}>
                                Next
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <h3>How many meals per day would you like?</h3>

            <ButtonToolbar>
                <ToggleButtonGroup type="radio"
                    name="options"
                    value={mealsPerDay}
                    onChange={() => updateSearchObject({ mealsPerDay: 2 })}
                    defaultChecked={mealsPerDay}>
                    <ToggleButton bsStyle={mealsPerDay === 2 ? 'primary' : 'default'} value={2}>2</ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup type="radio"
                    name="options"
                    value={mealsPerDay}
                    onChange={() => updateSearchObject({ mealsPerDay: 3 })}
                    defaultChecked={mealsPerDay}>
                    <ToggleButton bsStyle={mealsPerDay === 3 ? 'primary' : 'default'} value={3}>3</ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup type="radio"
                    name="options"
                    value={mealsPerDay}
                    onChange={() => updateSearchObject({ mealsPerDay: 4 })}
                    defaultChecked={mealsPerDay}>
                    <ToggleButton bsStyle={mealsPerDay === 4 ? 'primary' : 'default'} value={4}>3 & a snack</ToggleButton>
                </ToggleButtonGroup>

            </ButtonToolbar>

        </div>
    )
}

export default MealsPerDay