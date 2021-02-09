import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="grey darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Alek Moovie</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <NavLink to="/" >Main page</NavLink>
            </li>
            <li>
                <NavLink to="/" >Moovies</NavLink>
            </li>
            <li>
                <NavLink to="/" >TV serials</NavLink>
            </li>
          </ul>
        </div>
      </nav>   
    )
}

export default Nav