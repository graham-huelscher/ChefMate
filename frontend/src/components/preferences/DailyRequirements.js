import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { CaloriesAndMacros, Calories } from './DailyReqSpecifics'
import PageNav from './PageNav'

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

        let dailyRequirementsFormJSX = null
        if (buttonClicked && buttonClicked !== 1) {
            dailyRequirementsFormJSX = buttonClicked === 2 ?
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
                <PageNav previous='instructions' next='diets'/>
                
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

                {dailyRequirementsFormJSX}

            </div>
        )
    }
}

export default DailyRequirements