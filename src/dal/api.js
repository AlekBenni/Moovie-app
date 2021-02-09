import axios from 'axios'

// export const settings = {
//     withCredentials: true,
// }

// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org/3/",
//     ...settings
// })

 const key = '7ed80c921cfb148bf2e4409b9a7f3b2d'

export const moovieAPI = {
    getGanresMoovies(ganre, pageNum){
        const promise = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${ganre} &page=${pageNum}`)
        return promise
    },
    getGanres(){
        const promise = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
        return promise
    },
    getPerfect(){
        const promise = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`)
        return promise
    },
    getFilm(id){
        const promise = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
        return promise
    }
}

