import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'




function FormComp({
    initialValues,
    onSubmitCB,
    handleSubmit,
    errors,
    submitting,
    pristine
}) {




    return (



        <form
            onSubmit={handleSubmit(onSubmitCB)}
        >

            <Field
                component={TextInput}
                type="text"
                name="username"
                styleFrom={
                    {
                        color: 'black'
                    }
                }

            />
            <Field
                component={TextInput}
                type="text"
                name="email"
                styleFrom={
                    {
                        color: 'black'
                    }
                }

            />



            <button
                className="btn btn-success"

            >

                edit info
            </button>
        </form>
    )
}



export default reduxForm({
    form: 'userinfo',

})(FormComp);