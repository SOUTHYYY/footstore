import { SET_POSTS, SET_LOADING, SET_TOTAL_COUNT, SET_FILTER} from '../consts/catalog-consts'
import { PostsAPI } from '../../API/api'


const setPosts = (payload) => ({ type: SET_POSTS, payload })
const setLoading = (payload) => ({ type: SET_LOADING, payload })
const setTotalCount = (payload) => ({ type: SET_TOTAL_COUNT, payload })
const setFilter = (payload) => ({type: SET_FILTER, payload})
export const requestSortedPosts = (sort) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getSotredPosts(sort)
    dispatch(setFilter(sort))
    dispatch(setTotalCount(data.length))
    dispatch(setPosts(data))
    dispatch(setLoading(false))
}