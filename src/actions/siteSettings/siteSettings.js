import { toastr } from "react-redux-toastr";
import axios from "axios";
import { GET_ERRORS, GET_SITE_SETTINGS, GET_SLIDERS, GET_FAQS } from "../types";
import authService from "../../services/authService";
import axiosService from "../../services/axiosService";
import { asyncActionStart, asyncActionFinish } from "../asyncActions";
import { push, replace } from "connected-react-router";
import { isEmpty } from "../../utils/isEmpty";
import { reset, change } from "redux-form";
import { endpoint, prodEndpoint } from "../../config";

const URL = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint;
const axiosInstance = axiosService.getInstance();

export const deleteFAQ = (id, siteContentId) => {
	return dispatch => {
		// console.log(slider)
		// console.log(siteContentId)
		axios
			.post(`${URL}api/v1/contents/faq/delete`, { id, siteContentId })
			.then(data => {
				toastr.info("delete a faq ");
				dispatch(getFAQs());
			})
			.catch(() => {});
	};
};
export const deleteSlider = (id, siteContentId) => {
	return dispatch => {
		// console.log(slider)
		// console.log(siteContentId)
		axios
			.post(`${URL}api/v1/contents/slider/delete`, { id, siteContentId })
			.then(data => {
				toastr.info("delete a  slider ");
				dispatch(getSliders());
			})
			.catch(() => {});
	};
};
export const addFAQ = (faq, siteContentId) => {
	return dispatch => {
		// console.log(slider)
		// console.log(siteContentId)
		axios
			.post(`${URL}api/v1/contents/faq`, { faq, siteContentId })
			.then(data => {
				toastr.info("added a faq ");
				dispatch(getFAQs());
			})
			.catch(() => {});
	};
};
export const getFAQs = () => {
	return dispatch => {
		axios
			.get(`${URL}api/v1/contents/faq`)
			.then(response => {
				dispatch({
					type: GET_FAQS,
					payload: response.data.faqs
				});
			})
			.catch(() => {});
	};
};

export const getSliders = () => {
	return dispatch => {
		axios
			.get(`${URL}api/v1/contents/slider`)
			.then(response => {
				dispatch({
					type: GET_SLIDERS,
					payload: response.data
				});
			})
			.catch(() => {});
	};
};
export const createSlider = (slider, siteContentId) => {
	return dispatch => {
		// console.log(slider)
		// console.log(siteContentId)
		axios
			.post(`${URL}api/v1/contents/slider`, { slider, siteContentId })
			.then(data => {
				dispatch(getSliders());
				dispatch(push("/contents/headerimgs"));
			})
			.catch(() => {});
	};
};

export const getSiteSettings = () => {
	return dispatch => {
		axios
			.get(`${URL}api/v1/sitesettings/`)
			.then(response => {
				dispatch({
					type: GET_SITE_SETTINGS,
					payload: response.data.site
				});
			})
			.catch(err => {});
	};
};
