import React, { Component } from "react";
import Table from "../../../misc/table/Table";
import { connect } from "react-redux";
import moment from "moment";
import {
	getUsers,
	deleteUser,
	getSingleUser
} from "../../../../actions/adminActions";
import { push } from "connected-react-router";

class UsersTable extends Component {
	componentDidMount = () => {
		this.props.getUsers();
	};

	_editHandler = id => {
		this.props.getSingleUser(id);
		this.props.push("/users/add");
	};

	_deleteHandler = id => {
		this.props.deleteUser(id);
	};

	_viewHandler = () => {
		alert("Nothing to view for users");
	};

	render() {
		let tableheads, rows;

		if (this.props.users) {
			tableheads = ["username", "email", "role", "createdAt"];
			function getRole(user) {
				switch (user.role) {
					case 1:
						return "editor";
						break;
					case 2:
						return "admin";
					case 0:
						return "customer";
					default:
						break;
				}
			}
			rows = this.props.users.users.map(user => {
				let momentDate = moment(user.createdAt).format("YYYY-MM-DD");

				return {
					username: user.username,
					email: user.email ? user.email : "no email",
					phone: user.phone ? user.phone : "no phone",
					role: getRole(user),
					createdAt: momentDate,
					_id: user._id
				};
			});
		}

		return (
			<div>
				{this.props.users && (
					<Table
						rows={rows}
						tableheads={tableheads}
						iconObj={{
							deleteStyle: "fa fa-trash fa-lg",
							editStyle: "fa fa-cog fa-lg",
							viewStyle: "fa fa-eye fa-lg"
						}}
						handlers={[
							{ name: "edit", func: this._editHandler },
							{ name: "delete", func: this._deleteHandler },
							{ name: "view", func: this._viewHandler }
						]}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.admin.users
});

const mapDispatchToProps = {
	getUsers,
	deleteUser,
	getSingleUser,
	push
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersTable);
