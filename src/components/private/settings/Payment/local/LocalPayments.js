import React, { Component } from "react";
import LocalPaymentForm from "../addPayment/addLocalPayment";
import { addPayment } from "../../../../../actions/adminSettings";
import { connect } from "react-redux";
import { isEmpty } from "../../../../../utils/isEmpty";
import { getInitialValuesByName } from "../../../../../utils/payment/getIntialsByName";

class LocalPayment extends Component {
	state = {};

	submitHandler = data => {
		const { payments } = this.props;

		if (!isEmpty(payments)) {
			let finalPaymentsArr;

			// payments are already existed . u need to update by removing existing payment with same name and replace with new same name payment
			let filterdPayments = this.props.payments.filter(item => {
				return item.name !== data.name;
			});

			finalPaymentsArr = [...filterdPayments, data];
			this.props.addPayment(finalPaymentsArr, this.props.siteId, true);
		} else {
			// if u haven't add payments yet [ empty array ]. just push payment into payments array
			this.props.addPayment(data, this.props.siteId, false);
		}
	};

	render() {
		const { payments } = this.props;

		const localpayments = [
			{
				title: "KBZ Pay",
				name: "kbzpay",
				type: "local",
				paymentType: "mobile",
				country: "myanmar"
			},
			{
				title: "Wave Pay",
				name: "wavepay",
				type: "local",
				paymentType: "mobile",
				country: "myanmar"
			},
			{
				title: "True Money",
				name: "truemoney",
				type: "local",
				paymentType: "mobile",
				country: "myanmar"
			}
		];

		const renderCards = () => {
			return localpayments.map(payment => {
				let initialValuesPayment = getInitialValuesByName(
					payments || [],
					payment.name
				);

				return (
					<div className="card shadow-sm container my-2 py-2">
						<h5 className="my-3 py-3 text-center">{payment.title} settings</h5>

						<LocalPaymentForm
							form={`${payment.name}`}
							submitCallback={data => {
								let refinedData = {
									...data,
									name: payment.name,
									type: payment.type,
									paymentType: payment.paymentType,
									country: payment.country,
									account: {}
								};

								this.submitHandler(refinedData);
							}}
							initialValues={initialValuesPayment}
						/>
					</div>
				);
			});
		};

		return (
			<div className="container-fluid my-2 py-2">
				<h4 className="text-center text-muted">Local Payments</h4>
				<p className="text-muted text-center">
					We save your sensitive data in secure database and there is not need
					to worry for api keys
				</p>

				{renderCards()}
			</div>
		);
	}
}

export default LocalPayment;
