import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import { setFilmYearTC } from '../../bll/moovieReducer'

const MoovieYear = () => {
    const {years} = useParams()
    const dispatch = useDispatch() 
    const films = useSelector((state) => state.moovie.filmYear)

    useEffect(() => {
        dispatch(setFilmYearTC([years]))
    }, [useParams()])
    console.log([years])

    const resultMoovies = films.map(i => {
        return (
            <div key={i.id} className="col">
            <div className="card cardB">
              <div className="card-image">
              {i.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} alt="" /> 
                    :
                    <img src="http://www.tashrifat-komeil.com/ru/images/movie-film-reel.jpg" alt="" />
                    }          
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

    return(
        <>{resultMoovies}</>
    )
}

export default MoovieYear