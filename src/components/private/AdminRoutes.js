import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

import { logoutUser } from "../../actions/userActions";

import styles from "./AdminRoutes.module.css";
import SideBar from "./sidebar/index";
import Authenticated from "../misc/auth/Authenticated";
import DashBoard from "./dashboard/DashBoard";
import Products from "./products/index";
import Orders from "./orders/index";
import Categories from "./categories/index";
import Users from "./users/index";
import Promotions from "./promotions/index";
import Settings from "./settings/index";
import Customers from "./customers/index";
import InfoUser from "./InfoUser/InfoUser";
import Contents from "./contents/Contents";
import Marketing from "./marketing/Marketing";
import TopBar from "./topBar/TopBar";
import Brand from "./brands/index";
import Category from "./categories/Category";
import Collections from "./collections/index";
import {
	getCategories,
	getBrands,
	getCollections,
	getProductsToTable
} from "../../actions/productsActions";
import { getOrders } from "../../actions/adminActions";
import {
	getSiteSettings,
	getFAQs,
	getSliders
} from "../../actions/siteSettings/siteSettings";
import { getDeliveries } from "../../actions/settingsActions";
import { getEnquries } from "../../actions/customerActions";
class AdminRoutes extends Component {
	state = {
		dropdownOpen: false,
		direction: false,
		changeStyle: false
	};

	componentDidMount = () => {
		this.props.getCategories();
		this.props.getBrands();
		this.props.getCollections();
		this.props.getProductsToTable();
		this.props.getOrders();
		this.props.getSiteSettings();
		this.props.getDeliveries();
		this.props.getEnquries();
		this.props.getFAQs();
		this.props.getSliders();
	};

	toggle = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	};

	logoutUser = () => {
		this.props.logoutUser();
	};
	onMouseEnter = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	};

	onMouseLeave = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	};

	changeWidth = () => {
		this.setState(prevState => ({
			changeStyle: !prevState.changeStyle
		}));
	};
	changeDirection = () => {
		this.setState(prevState => ({
			direction: !prevState.direction
		}));
	};

	render() {
		let sidebarWidth = "2";
		let topbarWidth = "10";
		let iconDirection = "left";
		if (this.state.changeStyle) {
			sidebarWidth = "1";
			topbarWidth = "11";
		}

		if (this.state.direction) {
			iconDirection = "right";
		}

		return (
			<Fragment>
				<nav className="navbar">
					<div className="container-fluid">
						<div className="row">
							<div
								className={` col-xl-${sidebarWidth} ${
									styles.sidebar
								} fixed-top`}
							>
								<SideBar changeStyle={this.state.changeStyle} />
							</div>

							<TopBar
								onMouseEnter={this.onMouseEnter}
								onMouseLeave={this.onMouseLeave}
								toggle={this.toggle}
								topbarWidth={topbarWidth}
								sidebarWidth={sidebarWidth}
								dropdownOpen={this.state.dropdownOpen}
								logoutUser={this.logoutUser}
							/>
						</div>
					</div>
				</nav>

				<section className="py-4 my-4">
					<div className="container-fluid">
						<div className="row">
							<div className={`col-xl-${topbarWidth} col-lg-10 ml-auto`}>
								<Switch>
									<Route exact path="/" render={props => <DashBoard />} />
									<Route path="/products" render={props => <Products />} />
									<Route path="/brand" render={props => <Brand />} />
									<Route path="/category" render={props => <Category />} />
									<Route
										path="/collections"
										render={props => <Collections />}
									/>
									<Route path="/orders" render={props => <Orders />} />
									<Route path="/users" render={props => <Users />} />
									<Route path="/customers" render={props => <Customers />} />
									<Route path="/promotions" render={props => <Promotions />} />
									<Route path="/settings" render={props => <Settings />} />
									<Route path="/infouser" render={props => <InfoUser />} />
									<Route path="/contents" render={props => <Contents />} />
									<Route path="/marketing" render={props => <Marketing />} />
								</Switch>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	logoutUser,
	getBrands,
	getCategories,
	getCollections,
	getProductsToTable,
	getOrders,
	getSiteSettings,
	getDeliveries,
	getEnquries,
	getFAQs,
	getSliders
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminRoutes);
