import { GET_ERRORS, GET_CATEGORIES, UPLOAD_IMAGES, DELETE_IMAGE, GET_COLLECTIONS, GET_VARIANTS, CLEAR_IMAGES, GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_EDIT, GET_BRANDS, GET_PRODUCTS_SHOP, PRODUCT_SINGLE, GET_CART_ITEMS, CLEAR_ERRORS } from './types';
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



export const filterProducts = ({ filters, page }) => {



    return (dispatch) => {


        axiosInstance.post(`/products/all`, { filters, page })
            .then((response) => {

                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                })
                dispatch(reset('filterproducts'))


            })
            .catch((err) => {
                console.log(err)
            })







    }



}




export const deleteCollection = (collectionId) => {


    return (dispatch) => {

        axiosInstance.post(`/products/collections/delete/${collectionId}`)
            .then((response) => {

                dispatch(getCollections())
                toastr.success('Deleted', 'Collection deleted')
            })

            .catch((err) => {



            })


    }


}


export const deleteVariant = (variantId) => {


    return (dispatch) => {

        axiosInstance.post(`/products/variants/delete/${variantId}`)
            .then((response) => {


                dispatch(getVariants())
                toastr.success('Deleted', 'Variants deleted')
            })

            .catch((err) => {



            })


    }


}


export const addCollection = (dataToSubmit) => {


    return async (dispatch) => {

        try {


            const response = await axiosInstance.post('/products/collection', dataToSubmit)

            dispatch(asyncActionStart())

            if (response) {


                if (response.data.success) {

                    toastr.success('Collection added')
                    dispatch(getCollections())
                    dispatch(asyncActionFinish())



                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })

                    dispatch(asyncActionFinish())
                    toastr.error('Collection Error', 'errors in added collection')
                }




            }


        } catch (error) {




        }




    }



}






export const getCollections = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/collections')
            .then((response) => {


                dispatch({

                    type: GET_COLLECTIONS,
                    payload: response.data.collections

                })


                dispatch(asyncActionFinish())


            })

            .catch((err) => {

                console.log(err);


            })



    }

}

export const getVariants = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/variants')
            .then((response) => {


                dispatch({

                    type: GET_VARIANTS,
                    payload: response.data.variants

                })


                dispatch(asyncActionFinish())


            })

            .catch((err) => {

                console.log(err);


            })



    }

}

export const addVariant = (dataToSubmit) => {


    return async (dispatch) => {

        try {


            const response = await axiosInstance.post('/products/variant', dataToSubmit)

            dispatch(asyncActionStart())
            if (response) {


                if (response.data.success) {

                    toastr.success('Variant added')
                    dispatch(getVariants())
                    dispatch(asyncActionFinish())



                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })

                    dispatch(asyncActionFinish())
                    toastr.error('Category Error', 'errors in added category')
                }




            }


        } catch (error) {




        }




    }



}


export const clearProductToEdit = () => {

    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_EDIT,
            payload: null
        })
    }

}

export const getCartQty = (promoCode) => {

    const cartId = localStorage.getItem('cart_id')



    return (dispatch) => {
        if (cartId) {
            axiosInstance.post(`/cart/cart/get`, { cartId, promoId: promoCode })


                .then((response) => {


                    dispatch({
                        type: GET_CART_ITEMS,
                        payload: response.data.results
                    })
                    dispatch(asyncActionFinish())

                    dispatch({
                        type: CLEAR_ERRORS
                    })

                })
                .catch((err) => {

                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.errors
                    })

                    toastr.error('error')

                })

        } else {
            dispatch({
                type: GET_CART_ITEMS,
                payload: null
            })
            dispatch(asyncActionFinish())
        }

    }



}


export const removeCartItem = (itemId) => {
    const cartId = localStorage.getItem('cart_id')

    return (dispatch) => {
        dispatch(asyncActionStart())

        axiosInstance.post(`/cart/cart/${cartId}/${itemId}`)
            .then((response) => {

                toastr.success('Cart', 'cart item remove')
                dispatch(getCartQty())
                dispatch(asyncActionFinish())
            })
            .catch((err) => {
                console.log(err);
            })


    }
}

export const addToCart = (cartItem) => {


    const cartId = localStorage.getItem('cart_id')


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.post('/cart/cart', { cartItem, cartId })

            .then((response) => {

                // only set cartId token once
                if (!cartId) {
                    authService.setCartToken(response.data.cartId)
                }

                dispatch(getCartQty())
                dispatch(asyncActionFinish())
                toastr.success('Cart', 'product added to cart')
            })
            .catch((err) => {
                console.log(err)
            })

    }





}

export const getProductsByCat = (catId) => {



    return (dispatch) => {
        dispatch(asyncActionStart())

        axiosInstance.get(`/products/getbycat/${catId}`)
            .then((response) => {

                dispatch({
                    type: GET_PRODUCTS_BY_CATEGORY,
                    payload: response.data.products
                })
                dispatch(asyncActionFinish())
            })





    }



}



export const singleProductRedirect = (product) => {


    return (dispatch) => {

        dispatch({
            type: PRODUCT_SINGLE,
            payload: product
        })

        dispatch(push('/pdetails'))

    }

}



export const getProductsForShop = (page, filters = {}, name) => {


    return (dispatch) => {

        axios.post(`${URL}api/v1/products/shop`, { filters, page, name })
            .then((response) => {


                dispatch({
                    type: GET_PRODUCTS_SHOP,
                    payload: response.data

                })
                dispatch(push('/products'))
            })
            .catch((err) => {
                console.log(err)
            })

    }


}


export const addLike = (productId, catId) => {


    return (dispatch) => {

        axios.post(`${URL}api/v1/products/like`, { productId: productId })

            .then((response) => {

                dispatch(getProductsForShop())

                toastr.success('thanks for like ')

            })
            .catch((err) => {



            })


    }



}


export const deleteProduct = (productId) => {


    return (dispatch) => {

        dispatch(asyncActionStart())

        axiosInstance.post(`/products/delete/${productId}`)
            .then((response) => {

                toastr.success('DELETE PRODUCT', 'successfully deleted!!')
                dispatch(getProductsToTable())
                dispatch(asyncActionFinish())

            })

            .catch((err) => {
                console.log(err)
            })

    }

}

export const getProductsToTable = () => {



    return (dispatch) => {

        axiosInstance.post(`/products/all`)
            .then((response) => {

                dispatch({
                    type: GET_PRODUCTS,
                    payload: response.data
                })


            })
            .catch((err) => {
                console.log(err)
            })



    }



}



export const getBrands = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/brands')
            .then((response) => {


                dispatch({

                    type: GET_BRANDS,
                    payload: response.data.brands

                })


                dispatch(asyncActionFinish())


            })

            .catch((err) => {

                console.log(err);


            })



    }

}


export const getCategories = () => {


    return (dispatch) => {

        dispatch(asyncActionStart())
        axiosInstance.get('/products/categories')
            .then((response) => {


                dispatch({

                    type: GET_CATEGORIES,
                    payload: response.data.categories

                })


                dispatch(asyncActionFinish())


            })

            .catch((err) => {

                console.log(err);


            })



    }

}




export const sendImages = (blobs) => {


    const formData = new FormData()
    for (let i = 0; i < blobs.length; i++) {

        formData.append(`file${i}`, blobs[i])

    }

    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }


    toastr.success('images are uploading', 'wait a sec')




    const request = axiosInstance.post(`/products/upload`, formData, config)
        .then((response) => {

            toastr.success('success')
            return response.data

        })
        .catch((err) => {
            console.log(err)
        })

    return {
        type: 'UPLOADED_IMAGES',
        payload: request
    }


}



export const deleteOriginalImg = (imageId, productId) => {



    return (dispatch) => {


        axiosInstance.post(`/products/upload/${productId}/${imageId}`)
            .then((response) => {
                toastr('deleted original photo')

                dispatch({

                })

            })

            .catch((err) => {
                console.log(err);
            })



    }


}

export const deleteCategory = (categoryId) => {


    return (dispatch) => {

        axiosInstance.post(`/products/categories/delete/${categoryId}`)
            .then((response) => {


                dispatch(getCategories())
                toastr.success('Deleted', 'Category deleted')
            })

            .catch((err) => {



            })


    }


}
export const deleteBrand = (brandId) => {


    return (dispatch) => {
        dispatch(asyncActionStart())
        axiosInstance.post(`/products/brand/delete/${brandId}`)
            .then((response) => {


                dispatch(getBrands())
                toastr.success('Deleted', 'Brand deleted')
                dispatch(asyncActionFinish())
            })

            .catch((err) => {



            })


    }


}

export const addBrand = (dataToSubmit) => {


    return async (dispatch) => {

        try {


            const response = await axiosInstance.post('/products/brand', dataToSubmit)

            dispatch(asyncActionStart())
            if (response) {


                if (response.data.success) {

                    toastr.success('Brand added', 'successfully added brand')
                    dispatch(getBrands())
                    dispatch(asyncActionFinish())
                } else {


                    dispatch(asyncActionFinish())
                    toastr.error('Category Error', 'errors in added category')
                }

            }


        } catch (error) {




        }




    }



}

export const addCategory = (dataToSubmit) => {


    return async (dispatch) => {

        try {


            const response = await axiosInstance.post('/products/category', dataToSubmit)

            dispatch(asyncActionStart())
            if (response) {


                if (response.data.success) {

                    toastr.success('Category added', 'successfully added category')
                    dispatch(getCategories())
                    dispatch(asyncActionFinish())



                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })

                    dispatch(asyncActionFinish())
                    toastr.error('Category Error', 'errors in added category')
                }




            }


        } catch (error) {




        }




    }



}


export const addProduct = (dataToSubmit) => {




    return (dispatch) => {

        dispatch(asyncActionStart())

        axiosInstance.post(`/products/product`, dataToSubmit)
            .then((response) => {


                if (response.data.success) {


                    toastr.success('product added', 'a product is added successsfully')
                    dispatch(reset())
                    dispatch(getProductsToTable())
                    dispatch(asyncActionFinish())



                } else {

                    dispatch({
                        type: GET_ERRORS,
                        payload: response.data.message
                    })
                    dispatch(asyncActionFinish())



                }


            })

    }




}



export const getProductToEdit = (productId) => {

    return (dispatch) => {


        axiosInstance.get(`/products/single/${productId}`)

            .then((response) => {


                dispatch({
                    type: GET_PRODUCT_EDIT,
                    payload: response.data.product
                })

                dispatch(push('/admin/products/add/'))




            })





    }



}




export const editProduct = (productId, dataToEdit) => {


    return (dispatch) => {
        dispatch(asyncActionStart())
        axiosInstance.post(`products/edit/${productId}`, dataToEdit)
            .then((response) => {


                toastr.success('Updated', 'product is updated successfully')
                dispatch(reset('addproduct'))
                dispatch(getProductsToTable())
                dispatch(asyncActionFinish())

            })


    }



}