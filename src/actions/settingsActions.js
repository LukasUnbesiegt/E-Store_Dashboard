import { GET_ERRORS, GET_DELIVERIES, SINGLE_DELIVERY } from './types'
import authService from '../services/authService'
import axiosService from '../services/axiosService'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import { push, replace } from 'connected-react-router'
import axios from 'axios'
import { isEmpty } from '../utils/isEmpty'
import { endpoint, prodEndpoint } from '../config'
import { toastr } from 'react-redux-toastr'
const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();



export const editDelivery = (deliveryId) => {

    return (dispatch) => {

        axiosInstance.post('/delivery/edit', { deliveryId })
            .then((response) => {

                dispatch({
                    type: SINGLE_DELIVERY,
                    payload: response.data.delivery
                })
            })

    }


}

export const updateDelivery = (deliveryId, data) => {

    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.post('/delivery/update', { delivery: data, deliveryId })
            .then((response) => {
                dispatch(getDeliveries())
                dispatch(asyncActionFinish())
                toastr.success('delivery updated')
            })


    }
}


export const deleteDelivery = (deliveryId) => {

    console.log(deliveryId)

    return (dispatch) => {
        dispatch(asyncActionStart())
        axiosInstance.post('/delivery/delete', { deliveryId })
            .then((response) => {

                toastr.success('delivery deleted')
                dispatch(getDeliveries())
                dispatch(asyncActionFinish())
            })


    }


}



export const addDelivery = (delivery) => {



    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.post('/delivery/add', delivery)

            .then((response) => {



                toastr.success('Delivery', 'added delivery successfully')
                dispatch(getDeliveries())
                dispatch(asyncActionFinish())
            })

            .catch((err) => {


                console.log(err);
            })





    }


}


export const getDeliveries = () => {



    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/delivery/get')
            .then((response) => {

                dispatch({
                    type: GET_DELIVERIES,
                    payload: response.data.deliveries
                })

                dispatch(asyncActionFinish())


            })

    }


}


