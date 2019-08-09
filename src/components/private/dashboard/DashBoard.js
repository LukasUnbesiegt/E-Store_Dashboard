import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Authenticated from "../../misc/auth/Authenticated";

class DashBoard extends Component {
	render() {
		const renderDashboard = () => {
			return (
				<Fragment>
					<div className="d-flex justify-content-center align-items-center h-100">
						<h3 className="display-3">Home Page Future Purpose</h3>
					</div>
				</Fragment>
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
