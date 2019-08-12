import {
	GET_ORDERS,
	GET_ERRORS,
	GET_ORDERS_BY_ID,
	GET_ENQURIES
} from "./types";
import authService from "../services/authService";
import axiosService from "../services/axiosService";
import { asyncActionStart, asyncActionFinish } from "./asyncActions";
import { getCartQty } from "./productsActions";
import { push, replace } from "connected-react-router";
import axios from "axios";
import { reset } from "redux-form";
import { isEmpty } from "../utils/isEmpty";
import { filtersOrders } from "./ordersActions";
import { endpoint, prodEndpoint } from "../config";
import { toastr } from "react-redux-toastr";
import { getOrders } from "./adminActions";
const URL = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint;
const axiosInstance = axiosService.getInstance();

export const getEnquries = () => {
	return dispatch => {
		axios.get(`${URL}api/v1/customers/enquiry`).then(response => {
			console.log("happen");
			dispatch({
				type: GET_ENQURIES,
				payload: response.data.enquries
			});
		});
	};
};
export const sendEnquiry = data => {
	return dispatch => {
		axios.post(`${URL}api/v1/customers/enquiry`, data).then(response => {
			dispatch(reset("contact"));
			toastr.success("enquiry sent. thanks you");
		});
	};
};

export const applyPromo = code => {
	return dispatch => {
		dispatch(getCartQty(code));
		dispatch(reset("addpromo"));
	};
};

export const addOrder = order => {
	return dispatch => {
		axiosInstance
			.post("/customers/orders/add", order)
			.then(response => {
				toastr.success("order submitted");
				localStorage.removeItem("cart_id");
				localStorage.removeItem("promo_code");
				dispatch(getCartQty());

				dispatch(getOrdersById());
				dispatch(reset("addorder"));
			})

			.catch(err => {});
	};
};

export const changeStatus = ({ status, orderId }) => {
	return dispatch => {
		axiosInstance
			.post("customers/orders/status", { status, orderId })

			.then(response => {
				dispatch(filtersOrders({}, 1));
				toastr.info("changed status");
			});
	};
};

export const getOrdersById = (data, page) => {
	return dispatch => {
		axiosInstance
			.get("/admin/orders/customer", {
				params: {
					// if component just load , send empty object
					data: data ? data : {},
					page: page
				}
			})

			.then(response => {
				dispatch({
					type: GET_ORDERS_BY_ID,
					payload: response.data
				});
			});
	};
};
