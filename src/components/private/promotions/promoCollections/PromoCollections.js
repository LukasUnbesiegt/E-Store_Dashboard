import React, { Component } from "react";
import { connect } from "react-redux";
import FormPromoCollection from "./FormPromoCollection";
import { clearForm } from "../../../../actions/helpers";
class PromoCollections extends Component {
	handleSubmitHandler = () => {
		if (this.props.initialValues) {
			// this.props.editPromo(this.props.initialValues._id, data);
		} else {
			// this.props.ad(data);
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
	initialValues: state.admin.promocollection
});

const mapDispatchToProps = {
	clearForm
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PromoCollections);
