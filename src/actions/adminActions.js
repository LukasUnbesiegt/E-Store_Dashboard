import { GET_ERRORS, GET_USERS_ADMIN, GET_CUSTOMERS_ADMIN, GET_SINGLE_USER, GET_SINGLE_ORDER, GET_PROMOTIONS, GET_SINGLE_PROMOTION } from './types'
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





export const deleteUser = (userId) => {




    return (dispatch) => {


        axiosInstance.post(`/admin/users/delete/${userId}`)

            .then((response) => {


                dispatch(getUsers())

                toastr.success('an user deleted')
            })
            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

                toastr.error('something wrong while deleting')
            })






    }



}



export const editUser = (userId, user) => {




    return (dispatch) => {


        axiosInstance.post(`/admin/users/edit`, { userId, user })

            .then((response) => {


                dispatch(getUsers())
                dispatch(push('/admin/users'))

            })

            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

            })

    }

}


export const editPromo = (promoId, promotion) => {




    return (dispatch) => {


        axiosInstance.post(`/admin/promotion/edit`, { promoId, promotion })

            .then((response) => {


                dispatch(getPromotions())
                dispatch(push('/admin/promotions'))

            })

            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

            })

    }

}





export const clearPromotion = () => {


    return (dispatch) => {
        dispatch({
            type: GET_SINGLE_PROMOTION,
            payload: null
        })
    }

}



export const getSingleUser = (userId) => {


    return (dispatch) => {


        axiosInstance.get(`/admin/users/single/${userId}`)
            .then((response) => {


                dispatch({
                    type: GET_SINGLE_USER,
                    payload: response.data.user
                })





            })

            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

            })



    }



}


export const getSinglePromo = (promoId) => {





    return (dispatch) => {


        axiosInstance.get(`/admin/promotion/single/${promoId}`)
            .then((response) => {


                dispatch({
                    type: GET_SINGLE_PROMOTION,
                    payload: response.data.promotion
                })



                dispatch(push('/admin/promotions/add'))

            })

            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

            })



    }



}

export const deletePromotion = (promoId) => {




    return (dispatch) => {


        axiosInstance.post(`/admin/promotion/delete/${promoId}`)

            .then((response) => {


                dispatch(getPromotions())

                toastr.success('a promocode deleted')
            })
            .catch((err) => {

                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })
            })






    }



}



export const getPromotions = (data) => {


    return (dispatch) => {


        axiosInstance.post(`/admin/promotion/all`, data)

            .then((response) => {

                dispatch({
                    type: GET_PROMOTIONS,
                    payload: response.data
                })

            })
            .catch((err) => {

            })
    }


}


export const addPromo = (data) => {


    return (dispatch) => {


        axiosInstance.post(`/admin/promotion`, data)

            .then((response) => {
                dispatch(reset('addpromotions'))
                dispatch(getPromotions())
            })

            .catch((err) => {
                console.log(err)
            })
    }



}

export const addUser = (data) => {



    return (dispatch) => {



        axios.post(`${URL}api/v1/users/register`, data)
            .then((response) => {

                dispatch(reset('adduser'))




            })
            .catch((err) => {



                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data.errors
                })

                dispatch(change('adduser', 'password', ''))
                toastr.error('error')

            })





    }




}


export const getOrderById = (id) => {


    return (dispatch) => {

        axiosInstance.get(`/admin/order/${id}`)
            .then((response) => {


                dispatch({
                    type: GET_SINGLE_ORDER,
                    payload: response.data.order
                })

            })

            .catch((err) => {





            })

    }


}


export const getUsers = (data = {}) => {



    return (dispatch) => {

        axiosInstance.post('/admin/users', data)
            .then((response) => {


                dispatch({
                    type: GET_USERS_ADMIN,
                    payload: response.data
                })

            })

            .catch((err) => {



            })


    }


}


export const getCustomers = (data = {}) => {



    return (dispatch) => {

        axiosInstance.post('/admin/customers', data)



            .then((response) => {


                dispatch({
                    type: GET_CUSTOMERS_ADMIN,
                    payload: response.data
                })

            })

            .catch((err) => {



            })


    }


}