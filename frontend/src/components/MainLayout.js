import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainLayout = () => (
  <Grid >
    <h3>
      ChefMate
      </h3>
    <h5>
      We provide personalized weekly meal plans that help  <br />
      young adults eat healthy, great tasting food for less money.
      </h5>
    <Link to='/preferences/instructions/'>
      <Button bsStyle="primary" bsSize="large">
        Get my recipes!
          </Button>
    </Link>
  </Grid>
)

export default MainLayout