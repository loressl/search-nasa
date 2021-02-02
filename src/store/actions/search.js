import { SEARCH, CLEAR_LIST, CHOOSE_ITEM } from './actionTypes'
import { search } from '../../service'

export const searchAction = fieldSearch => {
    return async dispatch => {
        const response = await search(fieldSearch)
        dispatch({
            type: SEARCH,
            payload: response !== "error" ? response.data: response
        })
    }
}

export const clearList = () => {
    return { type: CLEAR_LIST }
}

export const chooseItem = index =>{
    return dispatch => {
        dispatch({
            type: CHOOSE_ITEM,
            payload: index
        })
    }
}