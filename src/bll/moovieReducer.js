import {moovieAPI} from '../dal/api'

const initState = {
    moovies: [],
    ganres: [],
    perfect: [],
    film: [],
    popularFilm: [],
    filmYear: []
}

export const moovieReducer = (state = initState, action) => {
    switch(action.type){
        case 'SET_MOOVIE':
            return {...state, moovies: action.moovie}
        case 'SET_GANRES':
            return {...state, ganres: action.ganres}  
        case 'SET_PERFECT': 
            return {...state, perfect: action.perfect} 
        case 'SET_FILM' :
            return {...state, film: action.film}    
        case 'POP_FILM':
            return {...state, popularFilm: action.film}   
        case 'FILM_YEAR':
            return {...state, filmYear: action.film}    
        default: return state 
    }
}
export const setMoovieAC = (moovie) => ({type: 'SET_MOOVIE', moovie})

export const setGanresAC = (ganres) => ({type: 'SET_GANRES', ganres})

export const setPerfectAC = (perfect) => ({type: 'SET_PERFECT', perfect})

export const getFilmAC = (film) => ({type: 'SET_FILM', film}) 

export const popularFilmAC = (film) => ({type: 'POP_FILM', film})

export const filmYearAC = (film) => ({type: 'FILM_YEAR' , film})

    //  Вывод фильмов по жанрам
export const setMoovieTC = (ganre, page) => (dispatch) => {
    moovieAPI.getGanresMoovies(ganre, page)
    .then((response) => {
        dispatch(setMoovieAC(response.data.results))
    })
    .catch((error) => {
        alert('something wrong!!!')
    })
}

    // Вывод списка жанров
export const setGanresTC = () => (dispatch) => {
    moovieAPI.getGanres()
    .then((response) => {
        dispatch(setGanresAC(response.data.genres))
    })
    .catch((error) => {
        alert('something wrong!!!')
    })
}

    //  Вывод лучших фильмов
export const setPerfectTC = () => (dispatch) => {
    moovieAPI.getPerfect()
    .then((response) => {
        dispatch(setPerfectAC(response.data.results))
    })
    .catch((error) => {
        alert('something wrong!!!')
    })
}

    //  Вывод отдельного фильма
export const setFilmTC = (id) => (dispatch) => {
    moovieAPI.getFilm(id)
    .then((response) => {
        dispatch(getFilmAC(response.data))
    })
    .catch((error) => {
        alert('Something wrong in Film!!!')
    })
}    

    //  Вывод популярных фильмов
export const setPopFilmTC = () => (dispatch) => {
    moovieAPI.getPopFilm()
    .then((response) => {
        dispatch(popularFilmAC(response.data.results))
    })
    .catch((error) => {
        alert("Something wrong in POP FILM!!!")
    })
}    

    //  Вывод фильма по году
export const setFilmYearTC = (year) => (dispatch) => {
    moovieAPI.getFilmByYear(year)
    .then((response) => {
        dispatch(filmYearAC(response.data.results))
    })
    .catch((error) => {
        alert("Something wrong in YEAR FILM!!!")
    })
}