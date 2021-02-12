import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setFilmTC } from '../../bll/moovieReducer'

const MooviePage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const film = useSelector((state) => state.moovie.film)

    useEffect(() => {
        dispatch(setFilmTC([id]))
    }, [useParams()])
  
    return (    
        <div class="col">
            <div class="card">
                <div class="card-image">
                {film.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" /> 
                    :
                    <img src="http://www.tashrifat-komeil.com/ru/images/movie-film-reel.jpg" alt="" />
                    }            
                </div>
                <div class="card-content">
                <span class="card-title">{film.title}</span>    
                <p>{film.overview}</p>
                </div>
                <div class="card-action">
                    
                 <a href={film.homepage} target="blank">Whatch film</a> 
                </div>
            </div>
        </div>
    )
}

export default MooviePage