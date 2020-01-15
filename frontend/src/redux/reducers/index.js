import {combineReducers} from "redux";
import auth from './auth-reducer'
import posts from './posts-reducer'
import card from './item-card-reducer'


export default combineReducers({
    auth,
    posts,
    card
})