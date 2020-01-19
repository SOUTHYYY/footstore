import {combineReducers} from "redux";
import auth from './auth-reducer'
import posts from './posts-reducer'
import card from './item-card-reducer'
import catalog from './catalog-reducer'


export default combineReducers({
    catalog,
    auth,
    posts,
    card
})