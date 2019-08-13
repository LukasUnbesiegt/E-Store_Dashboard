import React, { Component } from "react";
import AddCategory from "../categories/variants/index";
import CategoriesList from "./index";
import { Nav, NavItem } from "reactstrap";
import { Link, Switch, Route, NavLink } from "react-router-dom";

class Category extends Component {
	render() {
		return (
			<div className="container my-1 py-1">
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
							{/* <NavLink
								className="nav-link mx-1"
								to="/variant"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Variants List
							</NavLink> */}

							<NavLink
								className="nav-link mx-1"
								to="/variant/add"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Add Variant
							</NavLink>
						</Nav>
					</div>
				</div>

				<Switch>
					<Route exact path="/variant" render={() => <CategoriesList />} />
					<Route path="/variant/add" render={() => <AddCategory />} />
				</Switch>
			</div>
		);
	}
}

export default Category;
