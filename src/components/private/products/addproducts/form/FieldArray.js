import React from "react";
import { Field, FieldArray } from "redux-form";
import TextInput from "../../../../misc/forms/inputs/TextInput";

function FieldArrayComponent(props) {
	const renderItems = ({ fields }) => {
		return (
			<div className="">
				<button
					className="btn btn-sm btn-outline-dark"
					onClick={() => {
						fields.push("");
					}}
					type="button"
				>
					{props.placeholder}
				</button>
				<ul
					style={{
						listStyle: "none"
					}}
				>
					{fields.map((member, index) => (
						<li key={index}>
							<i
								className="fa fa-trash"
								onClick={() => fields.remove(index)}
								type="button"
							/>

							<Field
								name={`${member}.${props.name}`}
								type="text"
								component={TextInput}
								placeholder={props.placeholder}
								styleFrom={{
									color: "black"
								}}
							/>

							<Field
								name={`${member}.imglink`}
								type="text"
								component={TextInput}
								placeholder="variant image link (200 x 200 size )"
								styleFrom={{
									color: "black"
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<div>
			<FieldArray name={`variants.${props.name}`} component={renderItems} />
		</div>
	);
}

export default FieldArrayComponent;
