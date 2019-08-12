import {
	GET_USERS_ADMIN,
	GET_ORDERS_BY_ID,
	GET_CUSTOMERS_ADMIN,
	GET_SINGLE_ORDER,
	GET_PROMOTIONS,
	GET_SINGLE_IMAGE,
	GET_SINGLE_PROMOTION,
	GET_SINGLE_USER,
	GET_STORE_PROFILE,
	GET_ORDERS
} from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_ADMIN:
			return { ...state, users: action.payload };
		case GET_CUSTOMERS_ADMIN:
			return { ...state, customers: action.payload };
		case GET_SINGLE_ORDER:
			return { ...state, order: action.payload };
		case GET_PROMOTIONS:
			return { ...state, promotions: action.payload };
		case GET_SINGLE_PROMOTION:
			return { ...state, promotion: action.payload };
		case GET_SINGLE_USER:
			return { ...state, user: action.payload };
		case GET_STORE_PROFILE:
			return { ...state, store: action.payload };
		case GET_SINGLE_IMAGE:
			return { ...state, image: action.payload };
		case GET_ORDERS:
			let { orders, totalItems, currentPage } = action.payload;

			let columns = [
				{
					title: "order id",
					field: "id"
				},
				{
					title: "Status",
					field: "status",
					lookup: {
						INHOUSE: "INHOUSE",
						SHIPPING: "SHIPPING",
						DELIVERED: "DELIVERED"
					}
				},
				{
					title: "Name",
					field: "name"
				},

				{ title: "CreatedAt", field: "createdAt", type: "date" }
			];
			let data = orders.map(order => {
				return {
					id: order._id
				};
			});
			return { ...state, orders: { columns, orders, data } };

		default:
			return state;
	}
};
