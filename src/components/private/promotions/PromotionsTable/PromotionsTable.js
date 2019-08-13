import React, { Component } from "react";
import Table from "../../../misc/table/Table";
import moment from "moment";
import {
	deletePromotion,
	getSinglePromo,
	deletePromoCollection,
	getSinglePromoCollection
} from "../../../../actions/adminActions";
import { connect } from "react-redux";
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

class PromotionsTable extends Component {
	state = {
		activeTab: "0"
	};
	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	};
	_editHandler = id => {
		this.props.getSinglePromo(id);
	};

	_deleteHandler = id => {
		this.props.deletePromotion(id);
	};

	_viewHandler = () => {
		alert("Nothing to view for promotion");
	};
	_editHandler2 = id => {
		this.props.getSinglePromoCollection(id);
	};

	_deleteHandler2 = id => {
		this.props.deletePromoCollection(id);
	};

	_viewHandler2 = () => {
		alert("Nothing to view for promotion");
	};
	renderTabNavs = () => {
		const tabs = [
			{
				name: "promocode table",
				activeTab: "0"
			},
			{
				name: "promocollection table",
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
		let rows, rows2;
		const { promotions, promoCollections } = this.props;
		let tableheads = ["name", "percent", "quantity", "createdAt"];
		let tableheads2 = ["name", "percent", "from", "to", "createdAt"];

		if (promotions) {
			rows = promotions.promotions.map(promotion => {
				let formattedDate =
					moment(promotion.createdAt).format("YYYY-MM-DD") || "no date";

				return {
					name: promotion.name,
					percent: promotion.percent,
					quantity: promotion.quantity,
					createdAt: formattedDate || "no date",
					_id: promotion._id
				};
			});
		}
		if (promoCollections) {
			rows2 = promoCollections.promoCollections.map(promoCollection => {
				let formattedDate =
					moment(promoCollection.createdAt).format("YYYY-MM-DD") || "no date";
				let from =
					moment(promoCollection.start).format("YYYY-MM-DD") || "no date";
				let to = moment(promoCollection.end).format("YYYY-MM-DD") || "no date";
				return {
					name: promoCollection.name,
					percent: promoCollection.percent,
					from,
					to,
					createdAt: formattedDate || "no date",
					_id: promoCollection._id
				};
			});
		}

		return (
			<div>
				<div className=" my-2 py-2">
					<Nav tabs>{this.renderTabNavs()}</Nav>
				</div>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="0">
						<Table
							tableheads={tableheads}
							rows={rows}
							handlers={[
								{ name: "edit", func: this._editHandler },
								{ name: "delete", func: this._deleteHandler },
								{ name: "view", func: this._viewHandler }
							]}
						/>
					</TabPane>
					<TabPane tabId="1">
						<Table
							tableheads={tableheads2}
							rows={rows2}
							handlers={[
								{ name: "edit", func: this._editHandler2 },
								{ name: "delete", func: this._deleteHandler2 },
								{ name: "view", func: this._viewHandler2 }
							]}
						/>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	deletePromotion,
	getSinglePromo,
	deletePromoCollection,
	getSinglePromoCollection
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PromotionsTable);
