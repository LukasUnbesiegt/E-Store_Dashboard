import React, { Component, Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import Sliders from "./sliders";
import FAQs from "./FAQ";

class Contents extends Component {
	render() {
		const Lists = [
			{
				name: "header sliders",
				linkTo: "/contents/headerimgs"
			},
			{
				name: "FAQs",
				linkTo: "/contents/faqs"
			},
			{
				name: "About Store",
				linkTo: "/contents/about"
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
								<Route exact path="/contents" component={Sliders} />
								<Route path="/contents/headerimgs" component={Sliders} />
								<Route path="/contents/faqs" component={FAQs} />
							</Switch>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Contents;
