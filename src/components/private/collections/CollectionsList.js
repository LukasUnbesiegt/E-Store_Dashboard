import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCollection } from "../../../actions/productsActions";

class CollectionsList extends Component {
	deleteCollection = id => {
		this.props.deleteCollection(id);
	};

	renderCollections = () => {
		const { collections } = this.props;

		if (collections && collections.length > 0) {
			return collections.map(collection => {
				return (
					<li className="list-group-item d-flex justify-content-between align-items-center">
						{collection.name}
						<span className="">
							<a
								onClick={() => {
									this.deleteCollection(collection._id);
								}}
							>
								<i
									className="ni ni-fat-remove"
									style={{
										color: "green",
										fontSize: "28px"
									}}
								/>
							</a>
						</span>
					</li>
				);
			});
		} else {
			return (
				<h5 className="text-center my-2 py-2">No collections at the moment</h5>
			);
		}
	};

	render() {
		return <div className="my-2 py-2">{this.renderCollections()}</div>;
	}
}

const mapStateToProps = state => ({
	collections: state.products ? state.products.collections : null
});

const mapDispatchToProps = {
	deleteCollection
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionsList);
