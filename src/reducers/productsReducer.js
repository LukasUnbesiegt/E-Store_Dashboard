import {
	GET_CART_ITEMS,
	ADD_TO_CART,
	PRODUCT_SINGLE,
	GET_CATEGORIES,
	GET_CART_QTY,
	DELETE_CATEGORY,
	DELETE_IMAGE,
	CLEAR_IMAGES,
	GET_PRODUCTS,
	GET_PRODUCT_EDIT,
	GET_BRANDS,
	GET_PRODUCTS_SHOP,
	GET_PRODUCTS_BY_CATEGORY,
	GET_COLLECTIONS,
	GET_VARIANTS
} from "../actions/types";
import moment from "moment";
const initialState = {
	productToEdit: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_VARIANTS:
			return { ...state, variants: action.payload };
		case GET_COLLECTIONS:
			return { ...state, collections: action.payload };
		case GET_CATEGORIES:
			return { ...state, categories: action.payload };
		case GET_BRANDS:
			return { ...state, brands: action.payload };

		case GET_PRODUCTS:
			let { products, totalItems, currentPage } = action.payload;

			let columns = [
				{ title: "Name", field: "name" },
				{ title: "Price", field: "price", type: "numeric" },
				{ title: "Category", field: "category" },
				{ title: "Brand", field: "brand" },
				{ title: "Promo", field: "promo" },
				{ title: "CreatedAt", field: "createdAt", type: "date" },
				{ title: "Stocks", field: "stocks", type: "numeric" },
				{ title: "Likes", field: "likes", type: "numeric" },
				{ title: "Length", field: "length", type: "numeric" },
				{ title: "Width", field: "width", type: "numeric" },
				{ title: "Height", field: "height", type: "numeric" },
				{ title: "Weight", field: "weight", type: "numeric" }
				// {
				// 	title: "Birth Place",
				// 	field: "birthCity",
				// 	lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
				// }
			];

			let data = products.map(product => {
				return {
					_id: product._id,
					name: product.name,
					price: product.price.normal,
					category: product.category.name || "no category",
					brand: product.brand.name || "no brand",
					promo: product.promo ? product.promo.name : "no promo",
					createdAt: moment(product.createAt).format("YYYY MM DD"),
					stocks: product.stocks || 0,
					likes: product.likes || 0,
					length: product.dimension.length || "no length found",
					weight: product.dimension.weight || "no weight found",
					width: product.dimension.width || "no width found",
					height: product.dimension.height || "no height found"
				};
			});

			return { ...state, products: { columns, products, data } };

		case DELETE_CATEGORY:
			return { ...state };

		case GET_PRODUCT_EDIT:
			let product = action.payload;
			let refinedProduct;

			if (product) {
				refinedProduct = {
					...product,
					category: {
						value: product.category._id,
						label: product.category.name
					},
					brand: {
						value: product.brand._id,
						label: product.brand.name
					},
					// promo: {
					// 	value: product.promo._id,
					// 	label: product.promo.name
					// },
					collections: product.collections.map(collection => {
						return {
							value: collection._id,
							label: collection.name
						};
					})
				};
			}

			return { ...state, productToEdit: refinedProduct };

		case DELETE_IMAGE:
			let updatedImages = state.uploadedImages.filter(image => {
				return image.public_id !== action.payload;
			});
			return { ...state, uploadedImages: updatedImages };
		case CLEAR_IMAGES:
			return { ...state, uploadedImages: [] };

		case GET_PRODUCTS_SHOP:
			return { ...state, productsToShop: action.payload };

		case GET_PRODUCTS_BY_CATEGORY:
			return { ...state, productsByCat: action.payload };
		case PRODUCT_SINGLE:
			return { ...state, singleProduct: action.payload };

		case GET_CART_ITEMS:
			return { ...state, cartItems: action.payload };

		default:
			return state;
	}
};
