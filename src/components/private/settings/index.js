import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import Currency from "./Currency/Currency";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Profile from "./StoreProfile/Profile";

import Authenticated from "../../misc/auth/Authenticated";

class Settings extends Component {
	render() {
		const Lists = [
			// {
			// 	name: "Currency",
			// 	linkTo: "/settings/"
			// },
			{
				name: "Delivery",
				linkTo: "/settings/delivery"
			},
			{
				name: "Payment",
				linkTo: "/settings/payment"
			},
			{
				name: "Store Profile",
				linkTo: "/settings/storeprofile"
			}
		];
		const renderListItems = () => {
			return Lists.map((list, i) => {
				return (
					<ListGroupItem tag="a" action key={i}>
						<Link to={list.linkTo}>{list.name}</Link>
					</ListGroupItem>
				);
			});
		};

		return (
			<Fragment>
				<div className="mt-3">
					<div className="row">
						<div className="col-md-2 col-lg-2">
							<ListGroup>{renderListItems()}</ListGroup>
						</div>

						<div className="col-md-10 col-lg-10">
							<Switch>
								<Route exact path="/settings/" component={Currency} />
								<Route path="/settings/delivery" component={Delivery} />
								<Route path="/settings/payment" render={() => <Payment />} />
								<Route path="/settings/storeprofile" component={Profile} />
							</Switch>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Authenticated(Settings);
