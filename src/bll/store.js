import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {moovieReducer} from './moovieReducer'

const rootReducer = combineReducers({
    moovie: moovieReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))