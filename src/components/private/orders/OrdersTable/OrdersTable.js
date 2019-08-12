import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { push } from "connected-react-router";
import moment from "moment";
import { withRouter } from "react-router-dom";
import { getOrderById } from "../../../../actions/adminActions";
import { changeStatus } from "../../../../actions/customerActions";
import Table from "../../products/productsTable/ProductTable";
import { throws } from "assert";
import { Tab } from "@material-ui/core";

class OrdersTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRow: null
		};
	}

	_editHandler = () => {
		alert("more details");
	};

	_deleteHandler = () => {
		alert("deleted");
	};

	_viewHandler = id => {
		this.props.getOrderById(id);
		this.props.history.push("/admin/orders/details/");
	};

	_changeStatusDelivery = id => {
		this.props.changeStatus({ status: "DELIVERED", orderId: id });
	};
	_changeStatusInHouse = id => {
		this.props.changeStatus({ status: "INHOUSE", orderId: id });
	};
	_changeStatusShipping = id => {
		this.props.changeStatus({ status: "SHIPPING", orderId: id });
	};

	render() {
		const { orders } = this.props;
		console.log("orders", orders);
		return (
			<Fragment>
				<Table
					columns={orders && orders.columns}
					data={orders && orders.data}
					title="orders"
					options={{
						filtering: true,

						headerStyle: {
							backgroundColor: "#fae44d",
							color: "#FFF",
							fontSize: "15px",
							fontFamily: "poppins",
							textTransform: "uppercase"
						},
						searchFieldStyle: {
							fontFamily: "poppins",
							letterSpacing: "2px"
						},
						rowStyle: rowData => ({
							backgroundColor:
								this.state.selectedRow &&
								this.state.selectedRow.tableData.id === rowData.tableData.id
									? "#EEE"
									: "#FFF"
						}),
						pageSize: 20
					}}
					actions={[
						{
							tooltip: "Check Order Detail",
							icon: "check",
							onClick: (evt, data) => {}
						}
					]}
				/>
			</Fragment>
		);
	}
}

const mapDispatchToProps = {
	getOrderById,
	changeStatus
};

export default connect(
	null,
	mapDispatchToProps
)(withRouter(OrdersTable));
