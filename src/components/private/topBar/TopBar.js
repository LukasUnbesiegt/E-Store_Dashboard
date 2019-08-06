import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
class TopBar extends Component {
	renderSettingBar = () => {
		return (
			<Dropdown
				isOpen={this.props.dropdownOpen}
				toggle={this.props.toggle}
				onMouseEnter={() => {
					setTimeout(() => {
						this.props.onMouseEnter();
					}, 200);
				}}
				onMouseLeave={this.props.onMouseLeave}
			>
				<DropdownToggle nav>
					<a
						className="nav-link nav-link-icon "
						href="#"
						id="navbar-default_dropdown_1"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i
							className="ni ni-circle-08"
							style={{ fontSize: "36px", color: "white" }}
						/>
						<span className="nav-link-inner--text d-lg-none">User</span>
					</a>
				</DropdownToggle>

				<DropdownMenu>
					<DropdownItem>
						<a className="dropdown-item" href="/admin/infouser">
							User Informations
						</a>
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
						{" "}
						<a className="dropdown-item" href="#">
							Billings
						</a>
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>
						<button className="dropdown-item" onClick={this.props.logoutUser}>
							LogOut
						</button>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	};

	render() {
		return (
			<div
				className={`col-xl-${
					this.props.topbarWidth
				} col-lg-11  ml-auto  fixed-top`}
				style={{
					backgroundImage: `linear-gradient(120deg, #fae44d 0%, #fae44d 100%)`
				}}
			>
				<div className="d-flex">
					<div className="mr-auto p-3 ">
						<a
							style={{ color: "#fff", cursor: "pointer" }}
							onClick={() => {
								this.props.changeWidth();
								this.props.changeDirection();
							}}
						>
							<i
								className={` ni ni-bold-${this.props.iconDirection}`}
								style={{ fontSize: "25px" }}
							/>
						</a>
					</div>

					<div className="ml-auto">
						<NavLink
							to="/"
							className="nav-link mt-2"
							style={{ color: "#fff" }}
							target="_blank"
						>
							<span className="nav-link-icon d-block ml-2">
								<i className="ni ni-shop" />
								Store Front
							</span>
						</NavLink>
					</div>

					{this.renderSettingBar()}
				</div>
			</div>
		);
	}
}

export default TopBar;
