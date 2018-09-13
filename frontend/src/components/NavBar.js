import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className='main-nav'>
        <Link to="/">
          <img alt="Brand" src="../../ChefMate.PNG" style={{ height: "50px", marginTop:'5px' }} />
        </Link>
        <button type="button" className="btn btn-default navbar-btn ">Login</button>
      </div>
    </div>
  </nav>
)

export default NavBar