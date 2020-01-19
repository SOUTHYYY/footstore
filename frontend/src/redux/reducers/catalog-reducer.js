import { SET_POSTS, SET_LOADING } from '../consts/catalog-consts'

const initialState = {
    posts: [],
    loading: true
}

const CatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            debugger
            return {
                ...state,
                post: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}


export default CatalogReducer