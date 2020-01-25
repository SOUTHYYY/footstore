import { SET_CARD_POST, SET_CARD_LOADING } from '../consts/item-card-consts'
import { PostsAPI } from '../../API/api'


const setPost = (payload) => ({ type: SET_CARD_POST, payload })
const setLoading = (payload) => ({ type: SET_CARD_LOADING, payload })
export const requestCurrentPost = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getCurrentPost(id)
    dispatch(setPost(data))
    dispatch(setLoading(false))
}