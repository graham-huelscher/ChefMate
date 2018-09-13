import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

const Calories = props => (

    <Form inline>
        <FormGroup >
            <ControlLabel>Calories: </ControlLabel>{' '}
            <FormControl value={props.calories} onChange={(e) => props.updateSearchObject({calories: Number(e.target.value)})} type="number" />
        </FormGroup>
    </Form>
)

export default Calories