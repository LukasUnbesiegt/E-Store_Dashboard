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

		let columns = [
			{ title: "Name", field: "name" },
			{ title: "Surname", field: "surname" },
			{ title: "Birth Year", field: "birthYear", type: "numeric" },
			{
				title: "Birth Place",
				field: "birthCity",
				lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
			}
		];

		return (
			<div className="">
				<HeaderBar
					title="Products"
					sectionTitle="Products"
					quantity={products ? products.totalItems : 0}
					iconStyle="fa fa-archive"
					cat="Manage Categories"
					linkAdd="/products/add"
					linkTable="/products"
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
												},
												{
													tooltip: "view product",
													icon: "search",
													onClick: (evt, data) => {
														alert("coming soon");
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
