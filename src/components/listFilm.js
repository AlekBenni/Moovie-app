import React from 'react'
import { NavLink } from 'react-router-dom'

const ListFilm = () => {

    const years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007]

    return (
        <div className="listWrapper">
        <div className="container list">
            <div class="row">
                <div class="listItem col s12 m4">
                <NavLink to={`/films/${years[0]}`} className="waves-effect pink btn">Films {years[0]} year</NavLink>
                <NavLink to={`/films/${years[1]}`} className="waves-effect pink btn">Films {years[1]} year</NavLink>
                <NavLink to={`/films/${years[2]}`} className="waves-effect pink btn">Films {years[2]} year</NavLink>
                <NavLink to={`/films/${years[3]}`} className="waves-effect pink btn">Films {years[3]} year</NavLink>
                <NavLink to={`/films/${years[4]}`} className="waves-effect pink btn">Films {years[4]} year</NavLink>
                </div>
                <div class="listItem col s12 m4">
                <NavLink to={`/films/${years[5]}`} className="waves-effect pink btn">Films {years[5]} year</NavLink>
                <NavLink to={`/films/${years[6]}`} className="waves-effect pink btn">Films {years[6]} year</NavLink>
                <NavLink to={`/films/${years[7]}`} className="waves-effect pink btn">Films {years[7]} year</NavLink>
                <NavLink to={`/films/${years[8]}`} className="waves-effect pink btn">Films {years[8]} year</NavLink>
                <NavLink to={`/films/${years[9]}`} className="waves-effect pink btn">Films {years[9]} year</NavLink>
                </div>
                <div class="listItem col s12 m4">
                <NavLink to={`/films/${years[10]}`} className="waves-effect pink btn">Films {years[10]} year</NavLink>
                <NavLink to={`/films/${years[11]}`} className="waves-effect pink btn">Films {years[11]} year</NavLink>
                <NavLink to={`/films/${years[12]}`} className="waves-effect pink btn">Films {years[12]} year</NavLink>
                <NavLink to={`/films/${years[13]}`} className="waves-effect pink btn">Films {years[13]} year</NavLink>
                <NavLink to={`/films/${years[14]}`} className="waves-effect pink btn">Films {years[14]} year</NavLink>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListFilm