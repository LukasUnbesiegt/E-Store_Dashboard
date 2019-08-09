import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../../misc/forms/inputs/TextInput";
import CheckBox from "../../../../misc/forms/inputs/RadioInput";
import SelectInput from "../../../../misc/forms/inputs/SelectInput";
import MultipleSelect from "../../../../misc/forms/inputs/MultiSelectInput";
import DetailsFields from "./DetailsFields";
import FieldArray from "./FieldArray";
import Editor from "../../../../misc/forms/editor/Editor";
import ProductPhotos from "./ProductPhotos/ProductPhotos";
import Select from "../../../../misc/forms/inputs/selects/Select";

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = "Product Name is required";
	}

	if (!values.price) {
		errors.price = {
			normal: "price required",
			promo:
				"promo price required . if there is no promo price . add same  price"
		};
	}
	if (!values.sku) {
		errors.sku = "sku required for product";
	}
	if (!values.category) {
		errors.category = "category is required";
	}
	if (!values.brand) {
		errors.brand = "brand is required";
	}

	return errors;
};

class AddProductForm extends Component {
	componentWillUnmount = () => {
		this.props.clearForm("GET_PRODUCT_EDIT");
	};

	render() {
		const {
			handleSubmit,
			initialValues,
			categories,
			brands,
			submitCallback,
			editorState,
			onEditorStateChange,
			valid,
			errors,
			submitting,
			pristine,
			sendImages,
			change,
			variants
		} = this.props;

		let finalVariants = [
			...variants,
			{ name: "color" },
			{ name: "weight" },
			{ name: "size" }
		];

		return (
			<form onSubmit={handleSubmit(submitCallback)} className="was-validated">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<Field
								component={TextInput}
								name="name"
								placeholder="name"
								type="text"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="price.normal"
								placeholder="price"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="details.sku"
								placeholder="SKU"
								type="text"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="stocks"
								placeholder="Stocks"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="likes"
								placeholder="Likes"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
					</div>
					<div className="row my-1 py-1">
						<div className="col-md-4">
							<Field
								component={Select}
								name="category"
								placeholder="select category"
								type="text"
								options={categories || []}
							/>
						</div>
						<div className="col-md-4">
							<Field
								component={Select}
								name="brand"
								placeholder=" select brand"
								type="text"
								options={brands || []}
							/>
						</div>
						<div className="col-md-4">
							<Field
								component={Select}
								name="collections"
								placeholder=" select collections"
								type="text"
								options={this.props.collections || []}
								multi={true}
							/>
						</div>
					</div>
					<h5 className="my-1 py-1">Dimension of Product</h5>
					<div className="row">
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="dimension.length"
								placeholder="length"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="dimension.width"
								placeholder="width"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="dimension.height"
								placeholder="height"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
						<div className="col-md-2">
							<Field
								component={TextInput}
								name="dimension.weight"
								placeholder="weight"
								type="number"
								styleFrom={{
									color: "black"
								}}
							/>
						</div>
					</div>
				</div>

				<Field
					component={ProductPhotos}
					name="images"
					initialImages={initialValues ? initialValues.images : []}
					productId={initialValues ? initialValues._id : null}
				/>

				<div>
					<Field
						name="details.description"
						component={Editor}
						initialContent={
							initialValues ? initialValues.details.description : "<p></p>"
						}
						description={"product description"}
					/>
				</div>
				<label
					className="text-muted my-2 py-1"
					style={{ fontSize: "20px", borderBottom: "1px solid grey" }}
				>
					Variants for product
				</label>
				<div className="row">
					{finalVariants.map(variant => {
						return (
							<div className="col-md-3">
								<FieldArray name={variant.name} placeholder={variant.name} />
							</div>
						);
					})}
				</div>

				<button
					className="btn btn-outline-dark"
					disabled={pristine || submitting}
					type="submit"
				>
					{initialValues ? "Edit product " : " Add Product"}
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: "addproduct",
	validate: validate,
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	updateUnregisteredFields: true
})(AddProductForm);
