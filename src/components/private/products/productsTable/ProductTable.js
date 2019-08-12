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
					options={this.props.options}
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
