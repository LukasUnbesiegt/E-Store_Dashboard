import React, { Component } from "react";
import Table from "../../../misc/table/Table";
import moment from "moment";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import {
	deleteProduct,
	getProductToEdit,
	singleProductRedirect
} from "../../../../actions/productsActions";
import Filter from "../filter/Filter";
import Authenticated from "../../../misc/auth/Authenticated";
import { push } from "connected-react-router";

class ProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRow: null
		};
	}

	render() {
		return (
			<div>
				<MaterialTable
					columns={this.props.columns}
					data={this.props.data}
					title={
						<h3 style={{ fontFamily: "Poppins", letterSpacing: "3px" }}>
							{this.props.title}
						</h3>
					}
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
					actions={this.props.actions}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.products
});

const mapDispatchToProps = {
	deleteProduct,
	getProductToEdit,
	singleProductRedirect,
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductTable);
