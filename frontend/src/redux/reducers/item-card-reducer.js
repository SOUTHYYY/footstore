import { SET_CARD_POST, SET_CARD_LOADING } from '../consts/item-card-consts'

const initialState = {
    post: null,
    loading: true,
}

const ItemCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case SET_CARD_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}


export default ItemCardReducer