import React from 'react'
import { NavLink } from 'react-router-dom'

const ListFilm = () => {

    const years = [2014]

    return (
        <div className="listWrapper">
        <div className="container list">
            <div class="row">
                <div class="listItem col s12 m4">
                <NavLink to={`/films/${years[0]}`} className="waves-effect pink btn">Film {years[0]} year</NavLink>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                </div>
                <div class="listItem col s12 m4">
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                </div>
                <div class="listItem col s12 m4">
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                <a class="waves-effect waves-light btn">button</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListFilm