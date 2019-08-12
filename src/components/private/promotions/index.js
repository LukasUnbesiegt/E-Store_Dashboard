import React, { Component } from "react";
import HeaderBar from "../../styles/HeaderBar";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Authenticated from "../../misc/auth/Authenticated";
import Table from "./PromotionsTable/PromotionsTable";

import { getPromotions } from "../../../actions/adminActions";
import AddPromotions from "./AddPromotions/AddPromotions";
import PromotionsSettings from "./PromotionsSettings/PromotionSettings";

class Promotions extends Component {
	componentDidMount = () => {
		this.props.getPromotions();
	};

	render() {
		return (
			<div>
				<HeaderBar
					title="Promotions"
					sectionTitle="Promotions"
					quantity={
						this.props.promotions ? this.props.promotions.totalItems : 0
					}
					navArr={[
						{
							linkTo: "/promotions/create/0",
							name: "creation"
						},
						{
							linkTo: "/promotions/",
							name: "tables"
						}
					]}
					iconStyle="fa fa-bullhorn"
					cat="Manage Promotions"
					linkAdd="/promotions/add"
					linkTable="/promotions/"
					linkSetting="/promotions/settings"
				/>

				<div className="container-fluid pt-3 mt-3">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route
									exact
									path="/promotions/"
									render={() => <Table promotions={this.props.promotions} />}
								/>
								<Route
									path="/promotions/create/:tab"
									component={AddPromotions}
								/>
								<Route
									path="/promotions/settings/"
									component={PromotionsSettings}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	promotions: state.admin.promotions
});

const mapDispatchToProps = {
	getPromotions
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Promotions));
