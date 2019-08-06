import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'


class AddDeliveryForm extends Component {


    componentWillUnmount = () => {
        this.props.clearForm('SINGLE_DELIVERY')
    }

    render() {
        const { handleSubmit, submitCallback,
            valid, errors, submitting, pristine } = this.props;



        return (




            <form
                onSubmit={handleSubmit(submitCallback)}

            >


                <Field
                    component={TextInput}
                    name="township"
                    placeholder="enter town"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}

                />
                <Field
                    component={TextInput}
                    name="town"
                    placeholder="enter township or express gate"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}

                />
                <Field
                    component={TextInput}
                    name="price"
                    placeholder="enter price"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}

                />




                <button
                    type="submit"
                    className="btn "
                    style={{
                        backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                        color: 'white'
                    }}

                >

                    {
                        this.props.initialValues ? 'Edit Delivery' : 'Add Delivery'
                    }


                </button>
            </form>

        )
    }
}


export default reduxForm({
    form: 'add-delivery'
})(AddDeliveryForm);
