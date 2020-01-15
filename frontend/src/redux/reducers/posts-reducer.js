import { SET_POSTS, SET_LOADING } from '../consts/posts-consts'

const initialState = {
    posts: [],
    loading: true
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
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


export default postsReducer