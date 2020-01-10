import {SET_USER_DATA} from '../consts/auth-consts'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFretching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


export default authReducer