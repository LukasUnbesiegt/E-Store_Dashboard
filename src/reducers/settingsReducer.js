import { GET_DELIVERIES, SINGLE_DELIVERY } from '../actions/types'

const initialState = {

}




export default (state = initialState, action) => {
    switch (action.type) {

        case GET_DELIVERIES:

            return {
                ...state,
                deliveries: action.payload
            }

        case SINGLE_DELIVERY:

            return {
                ...state,
                deliveryToEdit: action.payload
            }


        default:
            return state
    }
}