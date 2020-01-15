import { SET_POSTS, SET_LOADING } from '../consts/posts-consts'
import { PostsAPI } from '../../API/api'


const setPosts = (payload) => ({ type: SET_POSTS, payload })
const setLoading = (payload) => ({ type: SET_LOADING, payload })
export const requestPosts = () => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getPosts()
    dispatch(setPosts(data))
    dispatch(setLoading(false))
}