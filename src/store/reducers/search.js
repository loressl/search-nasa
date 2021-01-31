import { SEARCH } from '../actions/actionTypes'

var initialState = { list: [] }

export default function searchReducer(state = initialState, action){
    switch(action.type){
        case SEARCH:
            return {...state, list: action.payload}
        default:
            return state
    }
}