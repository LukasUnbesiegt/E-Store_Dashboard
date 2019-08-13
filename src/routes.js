import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./actions/userActions";
import AdminRoutes from "./components/private/AdminRoutes";
import ModalManager from "./components/misc/modalManager/modalManager";
import { LANDING_URL } from "./config";
class Routes extends Component {
	componentDidMount = () => {
		window.onload = function() {
			// Get a reference to the div on the page that will display the
			// message text.
			// A function to process messages received by the window.
			function receiveMessage(e) {
				// Check to make sure that this message came from the correct domain.
				if (e.origin !== LANDING_URL && e.origin !== "http://localhost:3001")
					return;
				// Update the div element to display the message.

				localStorage.setItem("auth_token", e.data);
			}
			window.addEventListener("message", receiveMessage);
		};
		this.props.auth();
	};

	isAuthenticated = () => {
		if (this.props.userData && this.props.userData.isAuth) {
			return (
				<div>
					<ModalManager />

					<Switch>
						<AdminRoutes />
					</Switch>
				</div>
			);
		} else {
			return (
				<div className="d-flex h-100vh justify-content-center align-items-center">
					<i class="far fa-hand-paper mr-2" style={{ fontSize: "3rem" }} />
					<h3 className="display-4" style={{ letterSpacing: "0.3rem" }}>
						You are not authorized or not login into dashboard.
					</h3>
					<i class="far fa-hand-paper mr-2" style={{ fontSize: "3rem" }} />
				</div>
			);
		}
	};

	render() {
		return this.isAuthenticated();
	}
}

const mapStateToProps = state => {
	return {
		userData: state.user ? state.user.userData : null
	};
};

const mapDispatchToProps = { auth };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Routes);
