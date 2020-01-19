import { SET_POSTS, SET_LOADING } from '../consts/catalog-consts'
import { PostsAPI } from '../../API/api'


const setPosts = (payload) => ({ type: SET_POSTS, payload })
const setLoading = (payload) => ({ type: SET_LOADING, payload })
export const requestSortedPosts = (sort) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getSotredPosts(sort)
    debugger
    dispatch(setPosts(data))
    dispatch(setLoading(false))
}