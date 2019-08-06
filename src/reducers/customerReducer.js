import { GET_ORDERS_BY_ID, GET_ENQURIES, GET_FAQS } from '../actions/types'

const initialState = {

}




export default (state = initialState, action) => {

    switch (action.type) {


        case GET_ENQURIES:
            return {
                ...state,
                enquires: action.payload
            }
        case GET_ORDERS_BY_ID:
            return {
                ...state,
                orders: action.payload
            }
        case GET_FAQS:
            return { ...state, faqs: action.payload }

        default:
            return state
    }
}