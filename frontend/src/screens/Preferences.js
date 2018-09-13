import React from 'react'
import PreferencesLayout from '../components/preferences/PreferencesLayout'
import NavBar from '../components/NavBar'
import { Grid } from 'react-bootstrap'

const Preferences = (props) => (
  <div className='fullScreen'>
    <NavBar />
    <Grid >
      <PreferencesLayout {...props} />
    </Grid>
  </div>
)

export default Preferences