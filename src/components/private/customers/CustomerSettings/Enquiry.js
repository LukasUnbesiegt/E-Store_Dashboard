import React, { Component } from "react";
import { connect } from "react-redux";

class Enquiry extends Component {
	renderEnquries = () => {
		const { enquries } = this.props;

		if (enquries && enquries.length > 0) {
			return enquries.map((enquiry, i) => {
				return (
					<div className="col-md-4 col-lg-4">
						<div className="card" style={{ width: `18rem` }}>
							<div className="card-header">Enquery {i + 1}</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<strong>Name</strong> {enquiry.name}
								</li>
								<li className="list-group-item">
									<strong>Phone</strong> {enquiry.phone}
								</li>
								<li className="list-group-item">
									<strong>Description</strong> {enquiry.description}
								</li>
							</ul>
						</div>
					</div>
				);
			});
		} else {
			return (
				<div>
					<h4>No Enquires yet</h4>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="my-2 py-2">
				<h4 className="display-4 text-center my-2 py-2">Enquires from form </h4>
				<div className="row">{this.renderEnquries()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	enquries: state.customer ? state.customer.enquires : []
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Enquiry);
