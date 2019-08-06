import { GET_SITE_SETTINGS } from '../actions/types'

const initialState = {

};


export default (state = initialState, action) => {




    switch (action.type) {

        case GET_SITE_SETTINGS:
            return { ...state, site: action.payload }

        default:
            return state
    }
}
