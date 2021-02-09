import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { setMoovieTC } from '../../bll/moovieReducer';
import {NavLink} from 'react-router-dom'

const Ganres = () => {
    let {name, id} = useParams()

    const dispatch = useDispatch()
    const moovieGenres = useSelector((state) => state.moovie.moovies)

    useEffect(() => {
        dispatch(setMoovieTC([id], 1))
    })

    const resultMoovies = moovieGenres.map(i => {
        return (
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
          </div>
        )
    })

    return (
        <>
        <div className="filmCategory">
          <div className="filmCategoryTitle">Moovie category: {name}</div>
        </div>
        {resultMoovies}
        </>
    )
}

export default Ganres