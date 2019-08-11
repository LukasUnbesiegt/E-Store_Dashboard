import React, { Component, PureComponent } from "react";
import { reduxForm, Field, Fields } from "redux-form";
import TextInput from "../../../misc/forms/inputs/TextInput";
import SelectInput from "../../../misc/forms/inputs/SelectInput";
import DateRangePickerWrapper from "../../../misc/forms/dates/DateRangeInput";
import moment from "moment";

class AddPromotionsForm extends PureComponent {
	componentWillUnmount = () => {
		// this.props.clearForm('')
	};

	render() {
		// const roles = [
		//     { key: 'admin', text: 'Administrator', value: 3 },
		//     { key: 'editor', text: 'Editor', value: 2 },

		// ];
		const renderDates = fields => (
			<DateRangePickerWrapper
				startDateFieldName="start"
				endDateFieldName="end"
				{...fields}
			/>
		);
		const formatDates = (value, name) => {
			return moment(value);
		};
		const normalizeDates = (name, value) => {
			return value.format();
		};
		const {
			handleSubmit,
			submitCallback,
			valid,
			errors,
			submitting,
			pristine,
			initialValues
		} = this.props;

		return (
			<form onSubmit={handleSubmit(submitCallback)}>
				<div className="row">
					<div className="col-md-6">
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
					<div className="col-md-6">
						<Field
							component={TextInput}
							name="percent"
							placeholder="percent"
							type="number"
							styleFrom={{
								color: "black"
							}}
						/>
					</div>
				</div>

				<div className="row my-1 py-1">
					<div className="col-md-6">
						<Fields
							names={["start", "end"]}
							component={renderDates}
							normalize={normalizeDates}
							format={formatDates}
						/>
					</div>
					<div className="col-md-6">
						<Field
							component={TextInput}
							name="image"
							placeholder="collection image (600 x 400) size"
							type="text"
							styleFrom={{
								color: "black"
							}}
						/>
					</div>
				</div>

				<button
					type="submit"
					className="btn btn-outline-dark"
					disabled={submitting}
				>
					{initialValues ? "Edit promo collection" : "Add promo collection"}
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: "promocollection"
})(AddPromotionsForm);
