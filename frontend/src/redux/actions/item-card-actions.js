import { SET_POST, SET_LOADING } from '../consts/item-card-consts'
import { PostsAPI } from '../../API/api'


const setPosts = (payload) => ({ type: SET_POST, payload })
const setLoading = (payload) => ({ type: SET_LOADING, payload })
export const requestCurrentPost = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getCurrentPost(id)
    dispatch(setPosts(data))
    dispatch(setLoading(false))
}