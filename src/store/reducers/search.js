import { SEARCH, CLEAR_LIST } from '../actions/actionTypes'

var initialState = { list: [] }

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return { ...state, list: action.payload }
        case CLEAR_LIST:
            return { ...state, list: [] }
        default:
            return state
    }
}