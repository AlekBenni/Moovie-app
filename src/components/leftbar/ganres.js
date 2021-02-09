import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const GanresNav = () => {
    const ganres = useSelector((state) => state.moovie.ganres)

    const resultGanres = ganres.map(i => {
        return (
          <NavLink to={`/ganres/${i.name}/${i.id}`} key={i.id} className="waves-effect waves-light btn">
            <span className="lime-text text-lighten-5">{i.name}</span>
          </NavLink>)})

    return (
        <>{resultGanres}</>
    )
}

export default GanresNav