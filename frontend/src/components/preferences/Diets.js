import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const diets = [
    { "id": "386", "shortDescription": "Vegan", "longDescription": "Vegan", "searchValue": "386^Vegan", "type": "diet", "localesAvailableIn": ["en-US"] },
    { "id": "387", "shortDescription": "Lacto-ovo vegetarian", "longDescription": "Vegetarian", "searchValue": "387^Lacto-ovo vegetarian", "type": "diet", "localesAvailableIn": ["en-US"] },
    { "id": "403", "shortDescription": "Paleo", "longDescription": "Paleo", "searchValue": "403^Paleo", "type": "diet", "localesAvailableIn": ["en-US"] },
    { "id": "388", "shortDescription": "Lacto vegetarian", "longDescription": "Lacto vegetarian", "searchValue": "388^Lacto vegetarian", "type": "diet", "localesAvailableIn": ["en-US"] },
    { "id": "389", "shortDescription": "Ovo vegetarian", "longDescription": "Ovo vegetarian", "searchValue": "389^Ovo vegetarian", "type": "diet", "localesAvailableIn": ["en-US"] },
    { "id": "390", "shortDescription": "Pescetarian", "longDescription": "Pescetarian", "searchValue": "390^Pescetarian", "type": "diet", "localesAvailableIn": ["en-US"] }
]

class Diets extends Component {
    state = {
        diets: this.props.diets
    }

    toggleButton = button => {
        let newDiets = [...this.state.diets]
        let indexOfButton = newDiets.indexOf(button)
        if (indexOfButton === -1)
            newDiets.push(button)
        else
            newDiets.splice(indexOfButton, 1)
        this.setState({
            diets: newDiets
        })
    }

    render() {
        const dietsJSX = diets.map((diet, i) =>
            (<ToggleButtonGroup key={i} type="checkbox" defaultValue={this.state.diets} >
                <ToggleButton
                    bsStyle={this.state.diets.includes(diet.searchValue) ? 'primary' : 'default'}
                    onChange={(e) => this.toggleButton(e.target.value)}
                    value={diet.searchValue}
                >
                    {diet.longDescription}
                </ToggleButton>
            </ToggleButtonGroup>))

        return (
            <div>

                <nav className="navbar-fixed-top pageButtonsNav">
                    <div className="container">
                        <ul className="pager">
                            <li className="previous">
                                <Link to={'/preferences/daily-requirements/'}>
                                    Previous
                                </Link>
                            </li>
                            <li className="next">
                                <Link to={'/preferences/allergies/'} onClick={() => { this.props.updateSearchObject({ diets: this.state.diets }) }}>
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h3>All recipes shown will be compliant with the diets you select</h3>

                <ButtonToolbar>
                    {dietsJSX}
                </ButtonToolbar>

            </div>
        )
    }
}

export default Diets