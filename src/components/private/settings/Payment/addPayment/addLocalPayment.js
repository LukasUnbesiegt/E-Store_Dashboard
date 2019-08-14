import React from "react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../../misc/forms/inputs/TextInput";
import FieldUpload from "../../../../misc/forms/files/FileUpload";

function addLocalPayment({ submitCallback, initialValues, handleSubmit }) {
	return (
		<form
			onSubmit={handleSubmit(submitCallback)}
			className="my-2 py-2 text-center"
		>
			<Field
				name="mobile"
				component={TextInput}
				placeholder="account mobile number (eg . 09775775639 )"
				styleFrom={{
					color: "black"
				}}
			/>
			<Field
				name="qrcode"
				component={TextInput}
				placeholder="insert qr code image link"
				styleFrom={{
					color: "black"
				}}
			/>

			{/* <Field
                component={FieldUpload}
                name="qrcode"
                titleName="QR Code"

            /> */}

			<button
				className="btn "
				style={{
					backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
					color: "white"
				}}
			>
				{initialValues ? "edit settings" : "add settings"}
			</button>
		</form>
	);
}

export default reduxForm({
	Fields: "localpayment"
})(addLocalPayment);
