import { SEARCH } from './actionTypes'
import axios from 'axios'

export const search = fieldSearch =>{
    console.log(fieldSearch)
    return{
        type: SEARCH,
        payload: fieldSearch
    }
}