import { combineReducers } from 'redux'
import searchReducer from './reducers/search'

const reducers = combineReducers({
    search: searchReducer,
})

export default reducers