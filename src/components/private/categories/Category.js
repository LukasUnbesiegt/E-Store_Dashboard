import React, { Component } from "react";
import AddCategory from "../categories/form/AddCategory";
import CategoriesList from "./index";
import Variant from "./variants/index";
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
							<NavLink
								className="nav-link mx-1"
								to="/category"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Categories List
							</NavLink>

							<NavLink
								className="nav-link mx-1"
								to="/category/add"
								activeStyle={{
									backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
									color: "white",
									letterSpacing: "3px"
								}}
								style={{ letterSpacing: "3px" }}
							>
								Add Category
							</NavLink>
							<NavLink
								className="nav-link mx-1"
								to="/category/variant"
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
					<Route exact path="/category" render={() => <CategoriesList />} />
					<Route path="/category/add" render={() => <AddCategory />} />
					<Route path="/category/variant" render={() => <Variant />} />
				</Switch>
			</div>
		);
	}
}

export default Category;
