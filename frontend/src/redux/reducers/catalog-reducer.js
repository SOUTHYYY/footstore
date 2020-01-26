import { SET_CATALOG_POSTS, SET_CATALOG_LOADING, SET_TOTAL_COUNT, SET_FILTER, SORT_BY_LOW_PRICE, SORT_BY_HIGH_PRICE } from '../consts/catalog-consts'

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

const lowPriceSort = (posts) => {
    const newArr = [...posts]
    newArr.sort((a, b) => {
        return a.starting_price - b.starting_price;
    });
    return newArr
}

//Противополоджная сортировка массива как выше
const highPriceSort = (posts) => {
    const newArr = [...posts]
    newArr.sort((a, b) => {
        return b.starting_price - a.starting_price;
    });
    return newArr
}

const CatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_CATALOG_LOADING:
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
        case SORT_BY_LOW_PRICE:
            return {
                ...state,
                posts: lowPriceSort(state.posts)
            }
        case SORT_BY_HIGH_PRICE:
            return {
                ...state,
                posts: highPriceSort(state.posts)
            }
        default:
            return state
    }
}


export default CatalogReducer