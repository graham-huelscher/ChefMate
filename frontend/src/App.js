import React, { Component } from 'react';
import {
  Main,
  Preferences,
  WeeklyPlan
} from './screens'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    searchObject: {
      diets: [],
      allergies: [],
      ingredients: {
        regularly: [],
        // occasionally: [],
        // infrequently: [],
        never: []
      },
      cuisines: {
        regularly: [],
        // occasionally: [],
        // infrequently: [],
        never: []
      },
    }
  }

  AppSearchObject = (searchObject) => {
    this.setState({
      searchObject
    })
  }

  updateSearchObject = (obj) => {
    let newSearchObject = { ...this.state.searchObject }
    for (let key in obj) {
      newSearchObject[key] = obj[key]
    }
    this.setState({
      searchObject: newSearchObject
    })
  }

  removeFromSearchObject = (keys) => {
    let newSearchObject = { ...this.state.searchObject }
    keys.forEach(key => delete newSearchObject[key])
    this.setState({
      searchObject: newSearchObject
    })
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path={'/'} component={Main} exact={true} />
            <Route path={'/preferences'} render={(props) =>
              <Preferences
                {...props}
                AppSearchObject={this.AppSearchObject}
                updateSearchObject={this.updateSearchObject}
                removeFromSearchObject={this.removeFromSearchObject}
                {...this.state}
              />} />
            <Route path={'/weekly-plan'} render={() =>
              <WeeklyPlan
                searchObject={this.state.searchObject}
              />} />
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
