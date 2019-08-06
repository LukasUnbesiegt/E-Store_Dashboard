import React, { Component } from "react";
import { connect } from "react-redux";
import Authenticated from "../../misc/auth/Authenticated";

class DashBoard extends Component {
	render() {
		const renderDashboard = () => {
			return (
				<div>
					<h3>Home</h3>
				</div>
			);
		};

		return <div>{renderDashboard()}</div>;
	}
}

const mapStateToProps = state => ({
	async: state.async
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Authenticated(DashBoard));
