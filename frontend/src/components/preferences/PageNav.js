import React from 'react'
import { Link } from 'react-router-dom'

const PageNav = (props) => {
    const { previous, next, nextCallBackFcn } = props
    const previousJSX = previous ?
        <li className="previous">
            <Link to={`/preferences/${previous}/`}>
                Previous
            </Link>
        </li> :
        null
    let nextJSX = null
    if (nextCallBackFcn) {
        nextJSX =
            <li className="next">
                <Link to={`/preferences/${next}/`}>
                    Next
                </Link>
            </li>
    }
    else
        nextJSX =
            <li className="next">
                <Link to={`/preferences/${next}/`}>
                    Next
                </Link>
            </li>

    return (
        <nav className="navbar-fixed-top pageButtonsNav">
            <div className="container">
                <ul className="pager">
                    {previousJSX}
                    {nextJSX}
                </ul>
            </div>
        </nav>
    )

}

export default PageNav