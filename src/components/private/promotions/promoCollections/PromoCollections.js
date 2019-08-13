import React, { Component } from "react";
import { connect } from "react-redux";
import FormPromoCollection from "./FormPromoCollection";
import { clearForm } from "../../../../actions/helpers";
import {
	addPromoCollection,
	editPromoCollection
} from "../../../../actions/adminActions";
class PromoCollections extends Component {
	handleSubmitHandler = data => {
		if (this.props.initialValues) {
			this.props.editPromoCollection(this.props.initialValues._id, data);
		} else {
			this.props.addPromoCollection(data);
		}
	};

	render() {
		return (
			<div>
				<FormPromoCollection
					submitCallback={this.handleSubmitHandler}
					initialValues={this.props.initialValues || null}
					clearForm={this.props.clearForm}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	initialValues: state.admin.promoCollection
});

const mapDispatchToProps = {
	clearForm,
	addPromoCollection,
	editPromoCollection
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PromoCollections);
