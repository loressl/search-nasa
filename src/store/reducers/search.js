import { SEARCH, CLEAR_LIST, CHOOSE_ITEM } from '../actions/actionTypes'

var initialState = { list: [], item:{} }

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return { ...state, list: action.payload }
        case CLEAR_LIST:
            return { ...state, list: [] }
        case CHOOSE_ITEM:
            return {...state, item: state.list[action.payload]}
        default:
            return state
    }
}