import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AddProductForm from "./form/AddProductForm";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import {
	addProduct,
	editProduct,
	sendImages
} from "../../../../actions/productsActions";
import { clearForm } from "../../../../actions/helpers";

class AddProduct extends Component {
	handleSubmitHandler = data => {
		let dataToSubmit = {
			name: data.name,
			price: data.price,
			details: data.details,
			category: data.category ? data.category.value : null,
			brand: data.brand ? data.brand.value : null,
			collections: data.collections
				? data.collections.map(collection => {
						return collection.value;
				  })
				: [],
			promo: data.promo ? data.promo.value : null,
			featured: data.featured,
			dimension: data.dimension,
			stocks: data.stocks,
			likes: data.likes,
			images: data.images,
			details: data.details,
			variants: data.variants
		};

		if (this.props.initialValues) {
			//editing current product
			this.props.editProduct(this.props.initialValues._id, dataToSubmit);
		} else {
			//new product
			this.props.addProduct(dataToSubmit);
		}
	};

	render() {
		let categories, brands, collections, promocollections;
		console.log("initialValues", this.props.initialValues);
		// we want to refine data from server to fit in need of redux-form values
		if (this.props.categories) {
			categories = this.props.categories.map(category => {
				return {
					label: category.name,
					value: category._id
				};
			});
		}

		if (this.props.brands) {
			brands = this.props.brands.map(brand => {
				return {
					label: brand.name,
					value: brand._id
				};
			});
		}

		if (this.props.collections) {
			collections = this.props.collections.map(collection => {
				return {
					label: collection.name,
					value: collection._id
				};
			});
		}
		if (this.props.promocollections) {
			console.log("promocollection", this.props.promocollections);
			promocollections = this.props.promocollections.promoCollections.map(
				collection => {
					return {
						label: collection.name,
						value: collection._id
					};
				}
			);
		}

		return (
			<Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 text-center ">
							<h4 className="">Create A product</h4>
							<AddProductForm
								categories={categories}
								brands={brands}
								promocollections={promocollections}
								submitCallback={this.handleSubmitHandler}
								initialValues={this.props.initialValues}
								clearForm={this.props.clearForm}
								collections={collections || []}
								variants={this.props.variants || []}
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.products.categories,
	brands: state.products.brands,
	promocollections: state.admin.promoCollections,
	collections: state.products ? state.products.collections : null,
	variants: state.products ? state.products.variants : null,
	initialValues: state.products.productToEdit
});

const mapDispatchToProps = {
	addProduct,
	editProduct,
	sendImages,
	clearForm
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddProduct);
