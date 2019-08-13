import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'


class AddVariantForm extends Component {




    render() {
        const { handleSubmit, submitCB } = this.props;



        return (



            <form
                onSubmit={handleSubmit(submitCB)}

            >

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="variant name"
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
                    placeholder=" variant id"
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
                    placeholder="image link for variant ( 200 x 200 size ) "
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

                    Add Variant
                </button>
            </form>
        )
    }
}



export default reduxForm({


    form: 'addvarient'

})(AddVariantForm);