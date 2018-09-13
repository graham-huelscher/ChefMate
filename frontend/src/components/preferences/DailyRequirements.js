import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CaloriesAndMacros, Calories } from './DailyReqSpecifics'

class DailyRequirements extends Component {
    state = {
        buttonClicked: null
    }


    buttonClicked = (button) => {
        if (button === 1)
            this.props.removeFromSearchObject(['calories', 'fat', 'protein', 'carbs'])
        else if (button === 2)
            this.props.removeFromSearchObject(['fat', 'protein', 'carbs'])
        this.setState({
            buttonClicked: button
        })
    }

    render() {
        const { updateSearchObject, calories, fat, protein, carbs } = this.props
        let { buttonClicked } = this.state

        let dailyRequirementsForm = null
        if (buttonClicked && buttonClicked !== 1) {
            dailyRequirementsForm = buttonClicked === 2 ?
                <Calories calories={calories} updateSearchObject={updateSearchObject} /> :
                <CaloriesAndMacros
                    updateSearchObject={updateSearchObject}
                    calories={calories}
                    fat={fat}
                    protein={protein}
                    carbs={carbs} />
        }

        return (
            <div>
                <nav className="navbar-fixed-top pageButtonsNav">
                    <div className="container">
                        <ul className="pager">
                            <li className="previous">
                                <Link to={'/preferences/instructions/'}>
                                    Previous
                        </Link>
                            </li>
                            <li className="next">
                                <Link to={'/preferences/diets/'}>
                                    Next
                        </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <h3>Please select your daily nutritional requirements</h3>

                <ButtonToolbar>
                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={buttonClicked}
                        onChange={this.buttonClicked}>
                        <ToggleButton bsStyle={buttonClicked === 1 ? 'primary' : 'default'} value={1}>None</ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={this.state.buttonClicked}
                        onChange={this.buttonClicked}>
                        <ToggleButton bsStyle={buttonClicked === 2 ? 'primary' : 'default'} value={2}>Calories</ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={this.state.buttonClicked}
                        onChange={this.buttonClicked}>
                        <ToggleButton bsStyle={buttonClicked === 3 ? 'primary' : 'default'} value={3}>Calories + Macros</ToggleButton>
                    </ToggleButtonGroup>

                </ButtonToolbar>

                {dailyRequirementsForm}

            </div>
        )
    }
}

export default DailyRequirements