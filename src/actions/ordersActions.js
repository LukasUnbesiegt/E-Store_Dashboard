import { GET_ORDERS } from './types';
import axios from 'axios'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import axiosService from '../services/axiosService'
import authService from '../services/authService'
import { isEmpty } from '../utils/isEmpty'
import { endpoint, prodEndpoint } from '../config'
import { toastr } from 'react-redux-toastr'
import { reset } from 'redux-form'
import { push } from 'connected-react-router'

const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();


export const filtersOrders = ({ filters, page }) => {



    return (dispatch) => {



        axiosInstance.post('/customers/orders/get', { filters, page })


            .then((response) => {


                dispatch({
                    type: GET_ORDERS,
                    payload: response.data
                })


                dispatch(asyncActionFinish())
                dispatch(reset('filterorders'))
            })

            .catch((err) => {

            })





    }






}