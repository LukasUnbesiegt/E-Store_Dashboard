import React from "react";
import { Field } from "redux-form";

function DetailsFields() {
	return (
		<div className="d-flex">
			<div className="mr-3">
				<label className="mr-1" htmlFor="featured">
					Featured
				</label>
				<Field
					name="featured"
					id="featured"
					component="input"
					type="checkbox"
				/>
			</div>
		</div>
	);
}

export default DetailsFields;
