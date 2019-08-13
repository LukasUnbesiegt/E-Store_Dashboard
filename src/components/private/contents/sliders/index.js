import React, { Component, Fragment } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, Switch, Route } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Create from "./create";
import Lists from "./lists";
import { connect } from "react-redux";
import { isEmpty } from "../../../../utils/isEmpty";
import { deleteSlider } from "../../../../actions/siteSettings/siteSettings";

class index extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<h2 className="text-center display-4 my-2 py-2">Header Sliders</h2>

					<Divider />
					<div className="my-2 py-2">
						<Nav pills>
							<li className="nav-item">
								<NavLink
									to="/contents/headerimgs/create"
									className="nav-link"
									style={{
										backgroundImage: `linear-gradient(120deg, #fae54d 0%, #fae54d 100%)`
									}}
								>
									Create Slider Image
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/contents/headerimgs"
									className="nav-link"
									style={{
										backgroundImage: `linear-gradient(120deg, #fae54d 0%, #fae54d 100%)`
									}}
								>
									Sliders
								</NavLink>
							</li>
						</Nav>
					</div>

					<Switch>
						<Route
							exact
							path="/contents/headerimgs/"
							render={() => (
								<Lists
									sliders={this.props.sliders}
									siteContentId={this.props.siteContentId}
									deleteSlider={this.props.deleteSlider}
								/>
							)}
						/>
						<Route path="/contents/headerimgs/create" component={Create} />
					</Switch>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	sliders: !isEmpty(state.contents.sliders)
		? state.contents.sliders.sliders
		: [],
	siteContentId: state.contents.sliders ? state.contents.sliders.id : null
});

const mapDispatchToProps = {
	deleteSlider
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(index);
