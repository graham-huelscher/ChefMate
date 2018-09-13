import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, InputGroup } from 'react-bootstrap'

const CaloriesAndMacros = props => (

    <Form inline>
        <FormGroup >
            <ControlLabel>Calories: </ControlLabel>{' '}
            <FormControl value={props.calories} onChange={(e) => props.updateSearchObject({calories: Number(e.target.value)})} type="number" />
        </FormGroup>
        <FormGroup >
            <ControlLabel>Fat:</ControlLabel>{' '}
            <InputGroup>
                <FormControl value={props.fat} onChange={(e) => props.updateSearchObject({fat: Number(e.target.value)})} type="number" />
                <InputGroup.Addon>grams</InputGroup.Addon>
            </InputGroup>

            <ControlLabel>Protein:</ControlLabel>{' '}
            <InputGroup>
                <FormControl value={props.protein} onChange={(e) => props.updateSearchObject({protein: Number(e.target.value)})} type="number" />
                <InputGroup.Addon>grams</InputGroup.Addon>
            </InputGroup>
            <ControlLabel>Carbs:</ControlLabel>{' '}
            <InputGroup>
                <FormControl value={props.carbs} onChange={(e) => props.updateSearchObject({carbs: Number(e.target.value)})} type="number" />
                <InputGroup.Addon>grams</InputGroup.Addon>
            </InputGroup>
        </FormGroup>{' '}

    </Form>
)

export default CaloriesAndMacros