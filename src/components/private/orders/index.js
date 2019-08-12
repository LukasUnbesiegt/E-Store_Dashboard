import React, { Component } from "react";
import HeaderBar from "../../styles/HeaderBar";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import OrdersTable from "./OrdersTable/OrdersTable";
import OrdersSettings from "./OrdersSettings/OrdersSettings";
import OrderDetails from "./OrderDetails/OrderDetails";
import Authenticated from "../../misc/auth/Authenticated";
import { getOrders } from "../../../actions/adminActions";
class Orders extends Component {
	componentDidMount() {
		this.props.getOrders();
	}

	render() {
		console.log("orders", this.props.orders);

		return (
			<div className="">
				<HeaderBar
					title="Orders"
					sectionTitle="Orders"
					quantity={this.props.orders ? this.props.orders.data.length : 0}
					iconStyle="fa fa-shopping-bag"
					navArr={[
						{
							linkTo: "/orders",
							name: "order lists"
						},
						{
							linkTo: "/orders/settings",
							name: "settings"
						}
					]}
					cat="Manage Orders"
				/>

				<div className="container-fluid pt-3 mt-3">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route
									exact
									path="/orders/"
									render={() => <OrdersTable orders={this.props.orders} />}
								/>

								<Route path="/orders/settings/" component={OrdersSettings} />
								<Route
									path="/orders/details/"
									render={() => <OrderDetails />}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	orders: state.admin ? state.admin.orders : null
});

const mapDispatchToProps = {
	getOrders
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Orders));
