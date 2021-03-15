import {
    combineReducers,
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import searchReducer  from './reducers/search'

const reducers = combineReducers({
    search: searchReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig