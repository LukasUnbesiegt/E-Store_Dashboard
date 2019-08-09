import React, { Component, Fragment } from "react";
import HeaderBar from "../../styles/HeaderBar";
import { Switch, Route } from "react-router-dom";
import AddUser from "./AddUser/AddUser";
import UserTable from "./usersTable/UsersTable";
import UsersTable from "./usersTable/UsersTable";
import UsersSettings from "./userSettings/UsersSettings";
import { getUsers } from "../../../actions/adminActions";
import Authenticated from "../../misc/auth/Authenticated";
import { connect } from "react-redux";

class Users extends Component {
	componentDidMount = () => {
		this.props.getUsers();
	};

	render() {
		return (
			<Fragment>
				<HeaderBar
					title="Users"
					sectionTitle="Users"
					iconStyle="fa fa-users"
					cat="Manage Users"
					linkAdd="/users/add"
					linkTable="/users/"
					linkSetting="/users/settings/"
					quantity={this.props.users ? this.props.users.totalItems : 0}
				/>
				<div className="container-fluid pt-3 mt-3">
					<div className="row">
						<div className="col-12">
							<Switch>
								<Route exact path="/users/" component={UsersTable} />
								<Route
									path="/users/add/"
									render={() => <AddUser user={this.props.user} />}
								/>
								<Route path="/users/settings/" component={UsersSettings} />
							</Switch>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	users: state.admin.users
});

const mapDispatchToProps = {
	getUsers
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authenticated(Users));
