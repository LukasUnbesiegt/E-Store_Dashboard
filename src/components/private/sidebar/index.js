import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { navitems } from "./navitems";
import { NavLink, Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import Collapse from "./collapse/collapse";
import Divider from "@material-ui/core/Divider";

class SideBar extends Component {
	render() {
		const renderNavItems = () => {
			const navItems = navitems.map((item, i) => {
				return (
					<Fragment>
						{item.dropdowns ? (
							<Collapse
								i={i}
								item={item}
								sidebarlink={styles.sidebarlink}
								changeStyle={this.props.changeStyle}
								key={i}
							/>
						) : (
							<li className="" key={i}>
								<NavLink
									className={`nav-link text-white p-3 mb-2  ${
										styles.sidebarlink
									} `}
									to={item.linkTo}
								>
									<i className={`fa ${item.icon} fa-lg`} />
									<span
										style={{
											fontSize: "12px"
										}}
									>
										{this.props.changeStyle ? "" : `${item.name}`}

										{item.dropdowns && !this.props.changeStyle && (
											<i className="ni ni-bold-down ml-2" />
										)}
									</span>
								</NavLink>
							</li>
						)}
					</Fragment>
				);
			});

			return (
				<Fragment>
					<ul className="navbar-nav mt-4">
						{!this.props.changeStyle && (
							<Link
								className="display-4 text-center text-white"
								style={{
									letterSpacing: "0.1rem",
									fontWeight: "bold",
									cursor: "pointer"
								}}
								to="/"
							>
								E-Store
							</Link>
						)}

						{navItems}
						<Divider />

						{!this.props.changeStyle && (
							<div className="d-flex flex-column container my-2 text-center">
								<div>
									<span
										style={{
											fontSize: "19px",
											letterSpacing: "2px"
										}}
									>
										Contact
									</span>
								</div>
								<div>
									<a
										href=""
										style={{
											fontSize: "12px",
											letterSpacing: "2px"
										}}
									>
										thuta@estorebkh.com
									</a>
								</div>
								<div>
									<a
										href=""
										style={{
											fontSize: "12px",
											letterSpacing: "2px"
										}}
									>
										{" "}
										+ 959 775775639
									</a>
								</div>
							</div>
						)}
					</ul>
				</Fragment>
			);
		};

		return <Fragment>{renderNavItems()}</Fragment>;
	}
}

export default SideBar;
