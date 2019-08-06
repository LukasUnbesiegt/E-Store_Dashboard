import { GET_USERS_ADMIN, GET_CUSTOMERS_ADMIN, GET_SINGLE_ORDER, GET_PROMOTIONS, GET_SINGLE_IMAGE, GET_SINGLE_PROMOTION, GET_SINGLE_USER, GET_STORE_PROFILE, GET_ORDERS } from '../actions/types'

const initialState = {

}






export default (state = initialState, action) => {




    switch (action.type) {

        case GET_USERS_ADMIN:
            return { ...state, users: action.payload }
        case GET_CUSTOMERS_ADMIN:
            return { ...state, customers: action.payload }
        case GET_SINGLE_ORDER:
            return { ...state, order: action.payload }
        case GET_PROMOTIONS:
            return { ...state, promotions: action.payload }
        case GET_SINGLE_PROMOTION:
            return { ...state, promotion: action.payload }
        case GET_SINGLE_USER:
            return { ...state, user: action.payload }
        case GET_STORE_PROFILE:
            return { ...state, store: action.payload }
        case GET_SINGLE_IMAGE:
            return { ...state, image: action.payload }
        case GET_ORDERS:
            return { ...state, orders: action.payload }


        default:
            return state
    }
}
