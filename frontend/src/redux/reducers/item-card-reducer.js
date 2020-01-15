import { SET_POST, SET_LOADING } from '../consts/item-card-consts'

const initialState = {
    post: [],
    loading: true
}

const ItemCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
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


export default ItemCardReducer