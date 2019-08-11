import React, { Component } from "react";
import { connect } from "react-redux";
import {
	addPromo,
	clearPromotion,
	editPromo
} from "../../../../actions/adminActions";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col
} from "reactstrap";
import AddPromotionsForm from "./AddPromotionsForm";
import PromoCollections from "../promoCollections/PromoCollections";
class AddPromotions extends Component {
	state = {
		activeTab: this.props.match.params.tab || "0"
	};
	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	};
	handleSubmitHandler = data => {
		if (this.props.initialValues) {
			this.props.editPromo(this.props.initialValues._id, data);
		} else {
			this.props.addPromo(data);
		}
	};

	renderTabNavs = () => {
		const tabs = [
			{
				name: "promo code",
				activeTab: "0"
			},
			{
				name: "promo collection",
				activeTab: "1"
			}
		];

		return tabs.map(tab => {
			return (
				<NavItem>
					<NavLink
						style={{
							cursor: "pointer"
						}}
						className={`${this.state.activeTab === tab.activeTab && "active"}`}
						// className={classnames({ active: this.state.activeTab === "1" })}
						onClick={() => {
							this.toggle(tab.activeTab);
						}}
					>
						{tab.name}
					</NavLink>
				</NavItem>
			);
		});
	};
	render() {
		return (
			<div className="text-center">
				<div className=" my-2 py-2">
					<Nav tabs>{this.renderTabNavs()}</Nav>
				</div>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="0">
						<AddPromotionsForm
							submitCallback={this.handleSubmitHandler}
							initialValues={this.props.initialValues}
							clearPromotion={this.props.clearPromotion}
						/>
					</TabPane>
					<TabPane tabId="1">
						<PromoCollections />
					</TabPane>
				</TabContent>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	initialValues: state.admin.promotion
});

const mapDispatchToProps = {
	addPromo,
	clearPromotion,
	editPromo
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddPromotions);
