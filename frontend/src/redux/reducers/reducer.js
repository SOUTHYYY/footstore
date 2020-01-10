import authReducer from './auth-reducer'

const reduser = (state, action) => {
    return {
        auth: authReducer(state, action),
    }
}

export default reduser