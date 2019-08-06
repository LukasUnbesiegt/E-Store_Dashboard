import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'
import SelectInput from '../../../misc/forms/inputs/SelectInput'


class AddPromotionsForm extends Component {


    componentWillUnmount = () => {

        this.props.clearPromotion()

    }

    render() {


        // const roles = [
        //     { key: 'admin', text: 'Administrator', value: 3 },
        //     { key: 'editor', text: 'Editor', value: 2 },


        // ];
        const { handleSubmit, submitCallback, valid, errors, submitting, pristine, initialValues } = this.props;


        return (


            <form
                onSubmit={handleSubmit(submitCallback)}
            >


                <Field
                    component={TextInput}
                    name="name"
                    placeholder="name"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}

                />
                <Field
                    component={TextInput}
                    name="percent"
                    placeholder="percent"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}

                />
                <Field
                    component={TextInput}
                    name="quantity"
                    placeholder="quantity"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}

                />



                <button
                    type="submit"
                    className="btn btn-outline-dark"
                    disabled={submitting}

                >

                    {
                        initialValues ? 'Edit promocode' : 'Add promocode'
                    }
                </button>
            </form>
        )
    }
}





export default reduxForm({
    form: 'addpromotions'

})(AddPromotionsForm);
