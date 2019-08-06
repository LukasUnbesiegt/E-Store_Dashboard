import {
    GET_CART_ITEMS, ADD_TO_CART, PRODUCT_SINGLE, GET_CATEGORIES, GET_CART_QTY,
    DELETE_CATEGORY, DELETE_IMAGE,
    CLEAR_IMAGES, GET_PRODUCTS, GET_PRODUCT_EDIT, GET_BRANDS,
    GET_PRODUCTS_SHOP, GET_PRODUCTS_BY_CATEGORY, GET_COLLECTIONS, GET_VARIANTS
} from '../actions/types'




const initialState = {

    productToEdit: null,

}



export default (state = initialState, action) => {


    switch (action.type) {

        case GET_VARIANTS:
            return { ...state, variants: action.payload }
        case GET_COLLECTIONS:
            return { ...state, collections: action.payload }
        case GET_CATEGORIES:
            return { ...state, categories: action.payload }
        case GET_BRANDS:
            return { ...state, brands: action.payload }
        case GET_PRODUCTS:
            return { ...state, productsTable: action.payload }

        case DELETE_CATEGORY:
            return { ...state }

        case GET_PRODUCT_EDIT:
            return { ...state, productToEdit: action.payload }

        case DELETE_IMAGE:

            let updatedImages = state.uploadedImages.filter((image) => {
                return image.public_id !== action.payload;
            })
            return { ...state, uploadedImages: updatedImages }
        case CLEAR_IMAGES:
            return { ...state, uploadedImages: [] }

        case GET_PRODUCTS_SHOP:
            return { ...state, productsToShop: action.payload }

        case GET_PRODUCTS_BY_CATEGORY:
            return { ...state, productsByCat: action.payload }
        case PRODUCT_SINGLE:
            return { ...state, singleProduct: action.payload }

        case GET_CART_ITEMS:
            return { ...state, cartItems: action.payload }

        default:
            return state
    }
}
