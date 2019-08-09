import React, { Component } from "react";
import { connect } from "react-redux";
import AddUserForm from "./AddUserForm";
import { addUser, editUser } from "../../../../actions/adminActions";
import { clearForm } from "../../../../actions/helpers";

class AddUser extends Component {
	submitHandler = data => {
		let siteId = this.props.user._id;
		if (this.props.initialValues) {
			this.props.editUser(this.props.initialValues._id, data);
		} else {
			let dataToSent = {
				...data,
				siteId
			};
			this.props.addUser(dataToSent);
		}
	};

	render() {
		return (
			<div className="text-center">
				<AddUserForm
					submitCallback={this.submitHandler}
					errorsServer={
						this.props.errors.errors ? this.props.errors.errors : {}
					}
					initialValues={this.props.initialValues}
					clearForm={this.props.clearForm}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors,
	initialValues: state.admin.user
});

const mapDispatchToProps = {
	addUser,
	clearForm,
	editUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUser);
