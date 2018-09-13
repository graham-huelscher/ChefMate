import React from 'react'
import WeeklyPlanContainer from '../containers/WeeklyPlanContainer'
import NavBar from '../components/NavBar'
import { Grid } from 'react-bootstrap'

const WeeklyPlan = (props) => (
  <div className='fullScreen'>
    <NavBar />
    <Grid >
      <WeeklyPlanContainer {...props} />
    </Grid>
  </div>
)

export default WeeklyPlan