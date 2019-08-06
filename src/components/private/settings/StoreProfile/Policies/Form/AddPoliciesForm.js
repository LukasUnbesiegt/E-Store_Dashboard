import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import EditorComponent from '../../../../../misc/forms/editor/Editor'
import TextInput from '../../../../../misc/forms/inputs/TextInput'




class AddPoliciesForm extends Component {








    render() {
        const { handleSubmit, submitCallback, initialValues } = this.props;

        return (

            <form
                onSubmit={handleSubmit(submitCallback)}

            >

                <div
                    className="container text-center my-2 py-2"

                >

                    <h4>Refund Policy</h4>
                    <Field
                        component={EditorComponent}
                        name="policies.refunds"
                        initialContent={initialValues ? initialValues.refunds : '<p>sample</p>'}
                    />


                </div>
                <div
                    className="container text-center my-2 py-2"

                >

                    <h4>Terms and Conditions</h4>
                    <Field
                        component={EditorComponent}
                        name="policies.termsconds"
                        initialContent={initialValues ? initialValues.termsconds : '<p>sample</p>'}

                    />


                </div>
                <div
                    className="container text-center my-2 py-2"

                >

                    <h4>Returns Policy</h4>
                    <Field
                        component={EditorComponent}
                        name="policies.returns"
                        initialContent={initialValues ? initialValues.returns : '<p>sample</p>'}

                    />


                    <button
                        className="btn  mt-2 pt-2"
                        style={{
                            backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                            color: 'white'
                        }}
                        type="submit"

                    >
                        {
                            !initialValues ? 'Add Policies' : 'Edit Policies'
                        }

                    </button>
                </div>


            </form>
        )
    }
}





export default reduxForm({
    form: 'addpolicies',

})(AddPoliciesForm);