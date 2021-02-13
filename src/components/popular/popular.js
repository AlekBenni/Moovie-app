import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopFilmTC } from '../../bll/moovieReducer'
import {NavLink} from 'react-router-dom'

const PopularMoovie = () => {
    const dispatch = useDispatch()
    const popFilm = useSelector((state) => state.moovie.popularFilm)

    useEffect(() => {
        dispatch(setPopFilmTC())
    },[])
    console.log(popFilm)
    let resultPop = popFilm.map(i => {
         return(
            <div className="col s4 m2">
            <div className="card">               
                <NavLink to={`/moovie/${i.id}`}>             
                    <div className="cardT card-image waves-effect waves-block waves-light">
                    {i.poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} /> 
                    :
                    <div>
                    <img src="http://www.tashrifat-komeil.com/ru/images/movie-film-reel.jpg" />
                    <div className="topTitle">{i.title}</div>
                    </div>
                    }          
                    </div>
                </NavLink>            
            </div>
            </div>             
        )      
    })

    return (
        <div className="topBlock">
            <div class="row">
                {resultPop[0]}{resultPop[1]}{resultPop[2]}{resultPop[3]}{resultPop[4]}{resultPop[5]}
            </div>
        </div>
    )
}

export default PopularMoovie