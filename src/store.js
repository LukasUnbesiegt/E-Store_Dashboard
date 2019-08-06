import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import Thunk from "redux-thunk";
import Promise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { responsiveStoreEnhancer } from "redux-responsive";
const history = createBrowserHistory();

export const configureStore = preloadedState => {
	const middlewares = [Thunk, Promise, routerMiddleware(history)];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const storeEnhancers = [middlewareEnhancer, responsiveStoreEnhancer];
	const composedEnhancer = composeWithDevTools(...storeEnhancers);

	const store = createStore(
		reducers(history),
		preloadedState,
		composedEnhancer
	);

	return {
		store: store,
		history: history
	};
};
