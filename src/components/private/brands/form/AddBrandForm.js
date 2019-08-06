
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import TextInput from '../../../misc/forms/inputs/TextInput'


class AddBrandForm extends Component {




    render() {
        const { handleSubmit, submitCB, valid, errors, submitting, pristine } = this.props;



        return (



            <form
                onSubmit={handleSubmit(submitCB)}

            >

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="brand name"
                    type="text"
                    styleFrom={
                        {
                            color: 'black'
                        }
                    }

                />
                <Field
                    component={TextInput}
                    name="id"
                    placeholder="brand id"
                    type="text"
                    styleFrom={
                        {
                            color: 'black'
                        }
                    }

                />
                <Field
                    component={TextInput}
                    name="image"
                    placeholder="image link for brand ( 200 x 200 size ) "
                    type="text"
                    styleFrom={
                        {
                            color: 'black'
                        }
                    }

                />


                <button
                    className="btn btn-outline-dark"

                    type="submit"

                >

                    Add Brand
                </button>
            </form>
        )
    }
}



export default reduxForm({


    form: 'addbrand'

})(AddBrandForm);