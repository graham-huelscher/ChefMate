import React, { Component } from 'react';
import { ToggleButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const allergies = [
    { "id": "393", "shortDescription": "Gluten-Free", "longDescription": "Gluten-Free", "searchValue": "393^Gluten-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "394", "shortDescription": "Peanut-Free", "longDescription": "Peanut-Free", "searchValue": "394^Peanut-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "398", "shortDescription": "Seafood-Free", "longDescription": "Seafood-Free", "searchValue": "398^Seafood-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "399", "shortDescription": "Sesame-Free", "longDescription": "Sesame-Free", "searchValue": "399^Sesame-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "400", "shortDescription": "Soy-Free", "longDescription": "Soy-Free", "searchValue": "400^Soy-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "396", "shortDescription": "Dairy-Free", "longDescription": "Dairy-Free", "searchValue": "396^Dairy-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "397", "shortDescription": "Egg-Free", "longDescription": "Egg-Free", "searchValue": "397^Egg-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "401", "shortDescription": "Sulfite-Free", "longDescription": "Sulfite-Free", "searchValue": "401^Sulfite-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "395", "shortDescription": "Tree Nut-Free", "longDescription": "Tree Nut-Free", "searchValue": "395^Tree Nut-Free", "type": "allergy", "localesAvailableIn": ["en-US"] },
    { "id": "392", "shortDescription": "Wheat-Free", "longDescription": "Wheat-Free", "searchValue": "392^Wheat-Free", "type": "allergy", "localesAvailableIn": ["en-US"] }]

class Allergies extends Component {
    state = {
        allergies: this.props.allergies,
        next: false
    }

    toggleButton = button => {
        let newAllergies = [...this.state.allergies]
        let indexOfButton = newAllergies.indexOf(button)
        if (indexOfButton === -1)
            newAllergies.push(button)
        else
            newAllergies.splice(indexOfButton, 1)
        this.setState({
            allergies: newAllergies
        })
    }

    render() {

        const allergiesJSX = allergies.map((allergy, i) =>
            (
                <div><ToggleButtonGroup key={i} type="checkbox" defaultValue={this.state.allergies} >
                    <ToggleButton
                        bsStyle={this.state.allergies.includes(allergy.searchValue) ? 'primary' : 'default'}
                        onChange={(e) => this.toggleButton(e.target.value)}
                        value={allergy.searchValue}
                    >
                        {allergy.longDescription}
                    </ToggleButton>

                </ToggleButtonGroup>
                </div>)
        )

        return (
            <div>

                <nav className="navbar-fixed-top pageButtonsNav">
                    <div className="container">
                        <ul className="pager">
                            <li className="previous">
                                <Link to={'/preferences/diets/'}>
                                    Previous
                        </Link>
                            </li>
                            <li className="next">
                                <Link to={'/preferences/meals-per-day'} onClick={() => { this.props.updateSearchObject({ allergies: this.state.allergies }) }}>
                                    Next
                        </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h3>All recipes shown will be compliant with the allergies you select</h3>

                <ButtonToolbar>
                    {allergiesJSX}
                </ButtonToolbar>

            </div >
        )
    }

}

export default Allergies