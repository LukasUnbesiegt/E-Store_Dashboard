import React, { Component } from "react";
import { connect } from "react-redux";
import {
	deleteFAQ,
	getFAQs
} from "../../../../../actions/siteSettings/siteSettings";

class index extends Component {
	componentDidMount() {
		this.props.getFAQs();
	}

	renderFAQs = () => {
		const { faqs } = this.props;

		if (faqs && faqs.length > 0) {
			return faqs.map(faq => {
				return (
					<div className="col-md-4 col-lg-4">
						<div
							className="card my-2 py-2 mx-2 shadow"
							style={{ width: `18rem` }}
						>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">{faq.question}</li>
								<li class="list-group-item">{faq.answer}</li>
							</ul>
							<div class="card-footer text-muted">
								<div class="btn-group" role="group" aria-label="Basic example">
									<button
										class="btn btn-icon btn-2 btn-outline-dark btn-sm"
										type="button"
										onClick={() => {}}
									>
										<span class="btn-inner--icon">
											<i class="ni ni-settings" />
										</span>
									</button>
									<button
										class="btn btn-icon btn-2 btn-outline-dark btn-sm"
										type="button"
										onClick={() => {
											this.props.deleteFAQ(faq.id, this.props.siteContentId);
										}}
									>
										<span class="btn-inner--icon">
											<i class="ni ni-basket" />
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return <h3>No Sliders for now</h3>;
		}
	};

	render() {
		return (
			<div className="container">
				<div className="row">{this.renderFAQs()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	faqs: state.customer ? state.customer.faqs : [],
	siteContentId: state.contents.sliders ? state.contents.sliders.id : null
});

const mapDispatchToProps = {
	deleteFAQ,
	getFAQs
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
