import axios from "axios"
import { AllMoves, movieAPI } from "../Types/Type"


export const getAllMoves =  () => {

    return  async (dispatch) => {
        const res = await axios.get(movieAPI)
        dispatch( {type: AllMoves, data: res.data.results, pages: res.data.total_pages})
    }
}

export const getMovesSearch =  (word) => {

    return  async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?
        api_key=8b095b4536afd5e2236cc3998d1f2601&query=${word}&language=ar`)
        dispatch( {type: AllMoves, data: res.data.results, pages: res.data.total_pages})
    }
}


export const getMovespage =  (page) => {

    return  async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?
        api_key=8b095b4536afd5e2236cc3998d1f2601&language=ar&page=${page}`)
        dispatch( {type: AllMoves, data: res.data.results, pages: res.data.total_pages})
    }
}