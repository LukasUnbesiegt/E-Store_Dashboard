import React, { Component } from "react";
import Table from "../../../misc/table/Table";
import moment from "moment";
import { connect } from "react-redux";
import {
	deleteProduct,
	getProductToEdit,
	singleProductRedirect
} from "../../../../actions/productsActions";
import Filter from "../filter/Filter";
import Authenticated from "../../../misc/auth/Authenticated";
import { push } from "connected-react-router";

class ProductTable extends Component {
	_editHandler = productToEdit => {
		alert(productToEdit);
		this.props.getProductToEdit(productToEdit);
		this.props.push("/admin/products/add/");
	};

	_deleteHandler = productId => {
		this.props.deleteProduct(productId);
	};

	_viewHandler = productId => {
		if (this.props.products) {
			const product = this.props.products.products.find(item => {
				return item._id === productId;
			});
			console.log(product);
			this.props.singleProductRedirect(product);
		}
	};

	render() {
		const { products } = this.props;

		const tableheads = [
			"name",
			"sku",
			"price",
			"promoprice",
			"stocks",
			"createdAt"
		];
		let rows, productsForEdit;

		if (products && products.products && products.products.length > 0) {
			rows = products.products.map(product => {
				let formattedDate = moment(product.createdAt).format("YYYY-MM-DD");

				return {
					_id: product._id,
					name: product.name,
					sku: product.sku,
					price: product.price ? product.price.normal : "normal",
					promoprice: product.price ? product.price.promo : "normal",
					stocks: product.stocks,
					likes: product.likes,
					createdAt: formattedDate
				};
			});
		}

		return (
			<div>
				<div className="container-fluid my-2 py-2 card shadow-sm">
					<Filter />
				</div>

				<Table
					tableheads={tableheads}
					rows={rows}
					handlers={[
						{ name: "edit", func: this._editHandler },
						{ name: "delete", func: this._deleteHandler },
						{ name: "view", func: this._viewHandler }
					]}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.productsTable
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
