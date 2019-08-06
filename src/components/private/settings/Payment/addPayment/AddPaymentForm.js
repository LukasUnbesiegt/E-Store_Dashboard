
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'



function AddPaymentForm({ handleSubmit, submitCallback, form, initialValues }) {






    return (




        <form
            onSubmit={handleSubmit(submitCallback)}
            className="container my-2 py-2 text-center"
        >

            <Field
                name="keys.public"
                component={TextInput}
                placeholder="public key"
                styleFrom={{
                    color: 'black'
                }}

            />
            <Field
                name="keys.private"
                component={TextInput}
                placeholder="private key"
                styleFrom={{
                    color: 'black'
                }}

            />



            <button
                className="btn "
                style={{
                    backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                    color: 'white'
                }}

            >
                {`${initialValues ? 'edit' : 'add'} ${form} setting`}
            </button>
        </form>
    )
}



export default reduxForm({ Fields: 'interpayment' })(AddPaymentForm);