
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import TextArea from '../../../../misc/forms/inputs/TextArea'


function Form({
    handleSubmit,
    submitCallBack
}) {




    return (
        <form
            onSubmit={handleSubmit(submitCallBack)}
        >


            <div className="container-fluid text-center">

                <div className="row">

                    <div className="col-md-12">

                        <Field
                            name="question"
                            placeholder="enter the question"
                            component={TextInput}

                        />


                    </div>
                    <div className="col-md-12">

                        <Field
                            name="answer"
                            placeholder="enter the answer"
                            component={TextArea}

                        />


                    </div>



                </div>



                <button
                    type="submit"
                    className="btn btn-outline-dark"
                >


                    Add
                </button>

            </div>



        </form>
    )
}



export default reduxForm({
    form: 'faq'
})(Form);