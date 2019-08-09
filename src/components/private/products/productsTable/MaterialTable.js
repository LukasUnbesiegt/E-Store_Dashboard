import React, { Component, Fragment } from "react";
import MaterialTable from "material-table";
export default class MaterialTableComp extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<MaterialTable
						columns={this.props.columns}
						data={this.props.data}
						title={
							<h3 style={{ fontFamily: "Poppins", letterSpacing: "3px" }}>
								{this.props.title}
							</h3>
						}
						options={{
							filtering: true,
							headerStyle: {
								backgroundColor: "#fae44d",
								color: "#FFF",
								fontSize: "15px",
								fontFamily: "poppins",
								textTransform: "uppercase"
							},
							pageSize: 10
						}}
						actions={[
							{
								tooltip: "edit product",
								icon: "create",
								onClick: (evt, data) => this.props.push("/")
							},
							{
								tooltip: "delete product",
								icon: "delete",
								onClick: (evt, data) => this.props.push("/")
							}
						]}
					/>
				</div>
			</Fragment>
		);
	}
}
