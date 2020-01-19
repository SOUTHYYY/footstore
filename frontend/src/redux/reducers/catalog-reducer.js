import { SET_POSTS, SET_LOADING, SET_TOTAL_COUNT, SET_FILTER } from '../consts/catalog-consts'

const initialState = {
    posts: [],
    loading: true,
    totalCount: null,
    filter: null,
    filterButtons: [
        { name: "Sneakers", label: 'ОБУВЬ' },
        { name: 'Clothes', label: 'ОДЕЖДА' },
        { name: 'Accessories', label: 'АКСЕССУАРЫ' }
    ]
}

const CatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                post: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}


export default CatalogReducer