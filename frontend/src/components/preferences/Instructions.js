import React from 'react';
import { Link } from 'react-router-dom'

const Instructions = () => {
    return (
        <div>
            <nav className="navbar-fixed-top pageButtonsNav">
                <div className="container">
                    <ul className="pager">
                        <li className="next">
                            <Link to={'/preferences/daily-requirements/'}>
                                Next
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <h3>In the next couple steps we'll gather some food preferences <br />
                from you and provide you with a custom tailored weekly meal plan!
            </h3>

        </div>)
}


export default Instructions