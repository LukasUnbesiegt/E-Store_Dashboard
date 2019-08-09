import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HeaderBar from "../../styles/HeaderBar";
import { connect } from "react-redux";
import Authenticated from "../../misc/auth/Authenticated";
import Table from "./productsTable/MaterialTable";
import AddProduct from "./addproducts/AddProduct";
import AddCategory from "../categories/index";
import Category from "../categories/Category";
import Brand from "../brands/index";

class Products extends Component {
	render() {
		const { products } = this.props;
		console.log(this.props.user);
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
								<Route exact path="/products" render={() => <Table />} />
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
	products: state.products.productsTable
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Products));
