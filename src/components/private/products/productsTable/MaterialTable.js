import React, { Component, Fragment } from "react";
import MaterialTable from "material-table";
export default class MaterialTableComp extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<MaterialTable
						columns={[
							{ title: "Name", field: "name" },
							{ title: "Surname", field: "surname" },
							{ title: "Birth Year", field: "birthYear", type: "numeric" },
							{
								title: "Birth Place",
								field: "birthCity",
								lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
							}
						]}
						data={[
							{
								name: "Mehmet",
								surname: "Baran",
								birthYear: 1987,
								birthCity: 63
							},
							{
								name: "Zerya Betül",
								surname: "Baran",
								birthYear: 2017,
								birthCity: 34
							}
						]}
						title={
							<h3 style={{ fontFamily: "Poppins", letterSpacing: "3px" }}>
								Products
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
							selection: true
						}}
						actions={[
							{
								tooltip: "edit product",
								icon: "event",
								onClick: (evt, data) => this.props.push("/")
							}
						]}
					/>
				</div>
			</Fragment>
		);
	}
}
