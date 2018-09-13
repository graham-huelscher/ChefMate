import React, { Component } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class WeeklyPlan extends Component {
  state = {
    show: this.props.show
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  tableBuilder = (weeklyPlan, newTab, getAllRecipes) => {

    const weekJSX = []

    for (let meal in weeklyPlan.monday) {
      let row = []
      if (weeklyPlan.monday[meal]) {
        for (let day in weeklyPlan) {
          row.push(
            <td key={weeklyPlan[day][meal].id}>
              <Link to={`/recipe/${weeklyPlan[day][meal].id}`} onClick={(event) => { event.preventDefault(); newTab(weeklyPlan[day][meal].id) }} >
                {weeklyPlan[day][meal].recipeName}
              </Link>
              <br />
              <small>by {weeklyPlan[day][meal].sourceDisplayName}</small>
            </td>
          )
        }
        weekJSX.push(
          <tr>
            <td key={meal + ' header'} colSpan="7">{meal.charAt(0).toUpperCase() + meal.substr(1) + (meal === 'lunch' ? "es" : "s")}</td>
          </tr>)
        weekJSX.push(<tr key={meal}>{row}</tr>)
      }
    }
    let editRow = []
    for (let i = 0; i < 7; i++) {
      editRow.push(<td key={i}><Button bsStyle="info">Edit day</Button></td>)
    }
    weekJSX.push(<tr key="editRow">{editRow}</tr>)
    weekJSX.push(
      <tr>
        <td key="get all ingredients" colSpan="7">
          <Button onClick={() => {
            if (this.props.recipeList.length === 0)
              getAllRecipes()
            this.handleShow()
          }} bsStyle="primary">
            Compile grocery list!
          </Button>
        </td>
      </tr>)
    weekJSX.push(
      <tr>
        <td key="attribution" colSpan="7">
          Recipe search powered by <a href='http://www.yummly.co/recipes'><img alt='Yummly' src='https://static.yummly.co/api-logo.png' /></a>
        </td>
      </tr>)


    return weekJSX
  }

  render() {

    const { weeklyPlan, newTab, getAllRecipes } = this.props
    const weekJSX = this.tableBuilder(weeklyPlan, newTab, getAllRecipes)

    return (
      <div className='top-margin'>

        <Table bordered responsive>
          <thead>
            <tr>
              <th colSpan='7'><h3 style={{ textAlign: 'center' }}><strong>Your Weekly Plan</strong></h3></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th><h4><strong>Monday</strong></h4></th>
              <th><h4><strong>Tuesday</strong></h4></th>
              <th><h4><strong>Wednesday</strong></h4></th>
              <th><h4><strong>Thursday</strong></h4></th>
              <th><h4><strong>Friday</strong></h4></th>
              <th><h4><strong>Saturday</strong></h4></th>
              <th><h4><strong>Sunday</strong></h4></th>
            </tr>
          </thead>
          <tbody>
            {weekJSX}
          </tbody>
        </Table>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your grocery list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.recipeList.length > 0 ? this.props.recipeList.map(row => <p>{row}</p>) : <h4>Hold on while we compile your list</h4>}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
  }
}


export default WeeklyPlan