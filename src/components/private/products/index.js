import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HeaderBar from "../../styles/HeaderBar";
import { connect } from "react-redux";
import Authenticated from "../../misc/auth/Authenticated";
import Table from "./productsTable/ProductTable";
import AddProduct from "./addproducts/AddProduct";
import AddCategory from "../categories/index";
import Category from "../categories/Category";
import Brand from "../brands/index";
import { push } from "connected-react-router";
import {
	deleteProduct,
	getProductToEdit,
	singleProductRedirect
} from "../../../actions/productsActions";
class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRow: null
		};
	}

	_editHandler = productToEdit => {
		this.props.getProductToEdit(productToEdit);
	};

	_deleteHandler = productId => {
		this.props.deleteProduct(productId);
	};

	_viewHandler = productId => {
		if (this.props.products) {
			const product = this.props.products.products.find(item => {
				return item._id === productId;
			});

			this.props.singleProductRedirect(product);
		}
	};
	render() {
		const { products } = this.props;

		return (
			<div className="">
				<HeaderBar
					title="Products"
					sectionTitle="Products"
					quantity={products ? products.totalItems : 0}
					navArr={[
						{
							linkTo: "/products/add",
							name: "add product"
						},
						{
							linkTo: "/products/",
							name: "table"
						}
					]}
					iconStyle="fa fa-archive"
					cat="Manage Categories"
				/>

				<div className="container-fluid pt-3 mt-3">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route
									exact
									path="/products"
									render={() => (
										<Table
											columns={
												this.props.products && this.props.products.columns
											}
											title="Products"
											data={this.props.products && this.props.products.data}
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
														this.state.selectedRow.tableData.id ===
															rowData.tableData.id
															? "#EEE"
															: "#FFF"
												}),
												pageSize: 20
											}}
											actions={[
												{
													tooltip: "edit product",
													icon: "create",
													onClick: (evt, data) => {
														this._editHandler(data._id);
													}
												},
												{
													tooltip: "delete product",
													icon: "delete",
													onClick: (evt, data) => {
														this._deleteHandler(data._id);
													}
												}
											]}
										/>
									)}
								/>
								<Route path="/products/add" render={() => <AddProduct />} />
							</Switch>
						</div>
					</div>
				</div>
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
)(Authenticated(Products));
