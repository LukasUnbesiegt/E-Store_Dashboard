import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { connectRouter } from "connected-react-router";
import { responsiveStateReducer } from "redux-responsive";
import userReducer from "./userReducer";
import asyncReducer from "./asyncReducer";
import productsReducer from "./productsReducer";
import errorsReducer from "./errorsReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "../components/misc/modalManager/modalReducer";
import customersReducer from "./customerReducer";
import adminReducer from "./adminReducer";
import siteReducer from "./siteSettingsReducer";
import contentsReducer from "./contentsReducer";

export const reducers = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		user: userReducer,
		customer: customersReducer,
		toastr: toastrReducer,
		async: asyncReducer,
		modal: modalReducer,
		products: productsReducer,
		errors: errorsReducer,
		settings: settingsReducer,
		admin: adminReducer,
		site: siteReducer,
		browser: responsiveStateReducer,
		contents: contentsReducer
	});
