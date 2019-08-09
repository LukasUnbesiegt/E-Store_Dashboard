import React, { Component } from "react";
import AddCollection from "./form/AddCollection";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import CollectionsList from "./CollectionsList";
import { Nav, NavItem } from "reactstrap";

class Collections extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 ">
						<Link to="/products">
							{" "}
							<i class=" fa fa-arrow-left mr-2" />
							Back to Products
						</Link>
					</div>
					<div className="col-md-9 card  py-2">
						<Nav pills>
							<NavLink
								className="nav-link mx-1"
								to="/collections"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Collections List
							</NavLink>

							<NavLink
								className="nav-link mx-1"
								to="/collections/add"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Add Collection
							</NavLink>
						</Nav>
					</div>
				</div>

				<Switch>
					<Route exact path="/collections" render={() => <CollectionsList />} />
					<Route path="/collections/add" render={() => <AddCollection />} />
				</Switch>
			</div>
		);
	}
}

export default Collections;
