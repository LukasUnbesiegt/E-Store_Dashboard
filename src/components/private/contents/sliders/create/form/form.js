
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../../misc/forms/inputs/TextInput'
import SelectInput from '../../../../../misc/forms/inputs/SelectInput'







function form({
    submitCallBack,
    handleSubmit,
    collections,
    initialValues,
    pristine,
    submitting
}) {





    return (


        <form
            onSubmit={handleSubmit(submitCallBack)}
            className="text-center"

        >

            <div className="container">

                <Field
                    name="name"
                    component={TextInput}
                    placeholder="name of slider"

                />
                <Field
                    name="image"
                    component={TextInput}
                    placeholder="image link for slider."

                />
                <Field
                    name="collection"
                    component={SelectInput}
                    options={collections}

                />


                <button
                    type="submit"
                    className="btn "
                    style={{
                        backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                        color: '#fff'
                    }}
                    disabled={pristine || submitting}
                >

                    {
                        initialValues ? 'edit slider' : 'create slider'
                    }


                </button>


            </div>




        </form>
    )
}



export default reduxForm({ form: 'create_slider' })(form);