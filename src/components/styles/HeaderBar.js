import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

const HeaderBar = styled.div`
	background-color: ${props => props.bgcolor};
	margin: "0";

	h4 {
		padding-bottom: 4px;
		text-align: center;
		border-bottom: 1px solid black;
	}
`;

function headerBar(props) {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3">
						<div className="card card-common">
							<div className="card-body">
								<div className="d-flex">
									<i
										className={`${props.iconStyle} fa-3x mx-2 px-2 `}
										style={{
											color: `#f6d365`
										}}
									/>
									<div className="text-right text-secondary">
										<h5>{props.sectionTitle}</h5>
										<h3>{props.quantity}</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-9 col-md-9 col-lg-9">
						<div className="card m-2 p-2">
							<Nav pills>
								<NavLink
									to={props.linkAdd}
									className="nav-link mx-1"
									activeStyle={{
										backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
										color: "white",
										letterSpacing: "3px"
									}}
									style={{ letterSpacing: "3px" }}
								>
									{` Add ${props.title}`}
								</NavLink>
								<NavLink
									to={props.linkTable}
									className="nav-link mx-1"
									activeStyle={{
										backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
										color: "white"
									}}
									style={{
										letterSpacing: "3px"
									}}
								>
									Lists
								</NavLink>
								{props.linkSetting ? (
									<NavLink
										className="nav-link mx-1"
										activeStyle={{
											backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
											color: "white"
										}}
										to={props.linkSetting}
										style={{
											letterSpacing: "3px"
										}}
									>
										Settings
									</NavLink>
								) : null}
							</Nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default headerBar;
