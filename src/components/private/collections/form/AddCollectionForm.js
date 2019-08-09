import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../misc/forms/inputs/TextInput";

class AddCollectionForm extends Component {
	render() {
		const { handleSubmit, submitCB } = this.props;

		return (
			<form onSubmit={handleSubmit(submitCB)}>
				<Field
					component={TextInput}
					name="name"
					placeholder="collection name"
					type="text"
					styleFrom={{
						color: "black"
					}}
				/>
				<Field
					component={TextInput}
					name="id"
					placeholder=" collection id"
					type="text"
					styleFrom={{
						color: "black"
					}}
				/>
				<Field
					component={TextInput}
					name="image"
					placeholder="image link for collection ( 700 x 200 size ) "
					type="text"
					styleFrom={{
						color: "black"
					}}
				/>

				<button className="btn btn-outline-dark" type="submit">
					Add Collection
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: "addcollection"
})(AddCollectionForm);
