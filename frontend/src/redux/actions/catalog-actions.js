import { SET_CATALOG_POSTS, SET_CATALOG_LOADING, SET_TOTAL_COUNT, SET_FILTER, SORT_BY_LOW_PRICE, SORT_BY_HIGH_PRICE } from '../consts/catalog-consts'
import { PostsAPI } from '../../API/api'


const setPosts = (payload) => ({ type: SET_CATALOG_POSTS, payload })
const setLoading = (payload) => ({ type: SET_CATALOG_LOADING, payload })
const setTotalCount = (payload) => ({ type: SET_TOTAL_COUNT, payload })
const setFilter = (payload) => ({ type: SET_FILTER, payload })
// TODO: Доделать нормальную возможность выбирать сортировку
const sortByLowPrice = () => ({ type: SORT_BY_LOW_PRICE })
const sortByHighPrice = () => ({ type: SORT_BY_HIGH_PRICE })
export const sort = (type) => (dispatch) => {
    if (type === "B") {
        dispatch(setLoading(true))
        dispatch(sortByLowPrice())
        dispatch(setLoading(false))
    }
    if (type === 'C') {
        dispatch(setLoading(true))
        dispatch(sortByHighPrice())
        dispatch(setLoading(false))
    }

}
export const requestSortedPosts = (sort) => async (dispatch) => {
    dispatch(setLoading(true))
    const data = await PostsAPI.getSotredPosts(sort)
    dispatch(setFilter(sort))
    dispatch(setTotalCount(data.length))
    dispatch(setPosts(data))
    dispatch(setLoading(false))
}