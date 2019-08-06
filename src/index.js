import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { configureStore, history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import ReduxToastr from "react-redux-toastr";

// CSS INJECTIONS
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

ReactDOM.render(
	<Provider store={configureStore().store}>
		<ConnectedRouter history={configureStore().history}>
			<div>
				<ReduxToastr
					position="bottom-right"
					transitionIn="fadeIn"
					transitionOut="fadeOut"
				/>

				<Routes />
			</div>
		</ConnectedRouter>
	</Provider>,

	document.getElementById("root")
);
