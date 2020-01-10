import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store