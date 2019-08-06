import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./actions/userActions";
import AdminRoutes from "./components/private/AdminRoutes";
import ModalManager from "./components/misc/modalManager/modalManager";

class Routes extends Component {
	componentDidMount = () => {
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
