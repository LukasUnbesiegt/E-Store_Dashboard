import { GET_SLIDERS, } from '../actions/types'

const initialState = {

};


export default (state = initialState, action) => {




    switch (action.type) {

        case GET_SLIDERS:
            return { ...state, sliders: action.payload }


        default:
            return state
    }
}