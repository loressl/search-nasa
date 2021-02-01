import { SEARCH, CLEAR_LIST } from './actionTypes'
import { search } from '../../service'

export const searchAction = fieldSearch => {
    return async dispatch => {
        const response = await search(fieldSearch)
        dispatch({
            type: SEARCH,
            payload: response.data
        })
    }
}

export const clearList = () => {
    return { type: CLEAR_LIST }
}