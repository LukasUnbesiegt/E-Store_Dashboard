import React, { Component, Fragment } from "react";
import HeaderBar from "../../styles/HeaderBar";
import { Switch, Route } from "react-router-dom";
import CustomersTable from "./customersTable/CustomersTable";
import CustomersSettings from "./CustomerSettings/CustomerSettings";
import { connect } from "react-redux";
import Authenticated from "../../misc/auth/Authenticated";
import { getCustomers } from "../../../actions/adminActions";
import { getEnquries } from "../../../actions/customerActions";
import Enquiry from "./CustomerSettings/Enquiry";

class Customers extends Component {
	componentDidMount = () => {
		this.props.getCustomers();
		this.props.getEnquries();
	};

	render() {
		return (
			<Fragment>
				<HeaderBar
					title="Customers"
					sectionTitle="Customers"
					iconStyle="fa fa-address-card"
					cat="Manage Customers"
					linkAdd="/customers/add"
					linkTable="/customers/"
					quantity={this.props.customers ? this.props.customers.totalItems : 0}
				/>

				<div className="container-fluid pt-3 mt-3">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route path="/customers/add" render={() => <Enquiry />} />
								<Route
									exact
									path="/customers/"
									render={() => <CustomersTable />}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	customers: state.admin.customers
});

const mapDispatchToProps = {
	getCustomers,
	getEnquries
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Customers));
