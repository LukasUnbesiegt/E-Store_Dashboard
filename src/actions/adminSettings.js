import { GET_ERRORS, GET_USERS_ADMIN, GET_CUSTOMERS_ADMIN, GET_SINGLE_USER, GET_SINGLE_ORDER, GET_PROMOTIONS, GET_SINGLE_PROMOTION, GET_STORE_PROFILE, GET_SINGLE_IMAGE } from './types'
import authService from '../services/authService'
import axiosService from '../services/axiosService'
import { asyncActionStart, asyncActionFinish } from './asyncActions'
import { push, replace } from 'connected-react-router'
import axios from 'axios'
import { isEmpty } from '../utils/isEmpty'
import { reset, change } from 'redux-form'
import { endpoint, prodEndpoint } from '../config'
import { toastr } from 'react-redux-toastr'
const URL = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint
const axiosInstance = axiosService.getInstance();



export const singleImage = (blob) => {



    const formData = new FormData();
    formData.append('file', blob)
    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }


    const request = axiosInstance.post(`/admin/upload/single`, formData, config)
        .then((response) => {

            toastr.success('success')
            return response.data

        })

        .catch((err) => {
            return err.response.errors
        })



    return {
        type: GET_SINGLE_IMAGE,
        payload: request
    }


}




export const addPayment = (data, siteId, edit) => {


    return (dispatch) => {


        axiosInstance.post('/admin/settings/payment', { payment: data, siteId: siteId, edit })

            .then((response) => {


                toastr.success('payment added')

                dispatch(getStoreProfile())
            })

            .catch((err) => {

                console.log('error')


            })




    }










}


export const getStoreProfile = () => {



    return (dispatch) => {
        axiosInstance.get('/admin/settings/info')
            .then((response) => {

                dispatch({
                    type: GET_STORE_PROFILE,
                    payload: response.data.profile
                })
            })

            .catch((err) => {

                console.log('error')


            })


    }



}


export const addStoreInfo = (storeInfo, policies = {}) => {




    return (dispatch) => {


        axiosInstance.post('/admin/settings/info', { store: storeInfo, policies: policies.policies })
            .then((response) => {

                toastr.success('store profile changed')
                dispatch(getStoreProfile())
            })

            .catch((err) => {

                toastr.error('you are not admin.u cannot add/edit store ')


            })



    }








}