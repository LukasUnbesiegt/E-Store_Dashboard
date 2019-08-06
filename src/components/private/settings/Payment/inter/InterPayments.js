import React, { Component } from 'react'
import styles from './Inter.module.css'
import AddPaymentForm from '../addPayment/AddPaymentForm'
import { getInitialValuesByName } from '../../../../../utils/payment/getIntialsByName'
import { isEmpty } from '../../../../../utils/isEmpty'



class InterPayments extends Component {





    submitHandler = (data) => {
        const { payments } = this.props;


        if (!isEmpty(payments)) {
            let finalPaymentsArr;


            // payments are already existed . u need to update by removing existing payment with same name and replace with new same name payment
            let filterdPayments = this.props.payments.filter((item) => {
                return item.name !== data.name
            })

            finalPaymentsArr = [...filterdPayments, data]
            this.props.addPayment(finalPaymentsArr, this.props.siteId, true)

        }
        else {

            // if u haven't add payments yet [ empty array ]. just push payment into payments array
            this.props.addPayment(data, this.props.siteId, false)


        }




    }



    render() {

        const { payments } = this.props;
        let stripePayment = getInitialValuesByName(payments || [], 'stripe')
        let paypalPayment = getInitialValuesByName(payments || [], 'paypal')




        return (



            <div
                className="container-fluid my-2 py-2"


            >

                <h4 className="text-center text-muted"> International Payments</h4>

                <p className="text-muted text-center">

                    We save your sensitive data in secure database and there is not need to worry for api keys
                    if you don't have stripe and paypal accounts . click these links to register accounts .
                    <a href="https://www.paypal.com/ca/webapps/mpp/account-selection" target="_blank">Paypal Register</a> and  <a href="https://dashboard.stripe.com/register" target="_blank">Stripe Register</a> <br />
                    Contact thuta@estorebkh.com or +959775775639 for any helps
                </p>
                <div
                    className="card container my-4 shadow-sm"

                >
                    <h5 className="my-3 py-3">
                        <i className="fab fa-cc-stripe mx-3" style={{ fontSize: '45px', color: '#f6d365' }}></i>
                        Stripe Account Settings for
                            <i className="fab fa-cc-visa  fa-lg mx-2" style={{ fontSize: '35px', color: '#f6d365' }}></i>
                        <i className="fab fa-cc-mastercard  fa-lg mx-2" style={{ fontSize: '35px', color: '#f6d365' }}></i>

                    </h5>

                    <AddPaymentForm
                        submitCallback={
                            (data) => {
                                this.submitHandler({ ...data, name: 'stripe', type: 'inter', paymentType: 'card', country: 'inter', qrcode: [], account: {} })

                            }}
                        form={`stripe`}
                        initialValues={{ keys: stripePayment ? stripePayment.keys : null }}

                    />





                </div>

                <div
                    className="card container my-4 shadow-sm"

                >
                    <h5 className="my-3 py-3">
                        <i className="fab fa-cc-paypal mx-3" style={{ fontSize: '45px', color: '#f6d365' }}></i>
                        Paypal Account Settings


                    </h5>


                    <AddPaymentForm
                        submitCallback={
                            (data) => {
                                this.submitHandler({ ...data, name: 'paypal', type: 'inter', paymentType: 'card', country: 'inter', qrcode: [], account: {} })

                            }}
                        form={`paypal`}
                        initialValues={{ keys: paypalPayment ? paypalPayment.keys : null }}

                    />




                </div>





            </div>
        )
    }
}








export default InterPayments;