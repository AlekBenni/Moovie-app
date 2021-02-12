import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

const TopMoovie = () => {

    const moovie = useSelector((state) => state.moovie.perfect)
     console.log(moovie)

    const resultMoovie = moovie.map(i => {
        return(
        <div key={i.id} className="col">
          <div className="card cardB">
            <div className="card-image">
              <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} />        
            </div>
            <div className="card-content">
            <span className="card-title">{i.title}</span>  
            {i.overview}
             <div className="card-action">
              <NavLink to={`/moovie/${i.id}`}>Read more</NavLink>
            </div>          
            </div>
         </div>  
        </div> )})

    return (
        <>
        <div className="filmCategory">
          <div className="filmCategoryTitle">Moovie category: Most popular</div>
        </div>
        {resultMoovie}
        </>
    )
}

export default TopMoovie