import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'




function FilterForm({
    submitCallback, handleSubmit, reset
}) {




    return (


        <form
            onSubmit={handleSubmit(submitCallback)}
            className="text-center"
        >

            <div
                className="row"
            >

                <div className="col-md-6">
                    <Field
                        name="namesku"
                        component={TextInput}
                        placeholder="search by name or sku"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                </div>


                <div className="col-md-2">
                    <Field
                        name="price.from"
                        component={TextInput}
                        placeholder="price from"
                        type="number"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <Field
                        name="price.to"
                        component={TextInput}
                        placeholder="price to"
                        type="number"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                </div>

                <div className="col-md-2">

                    <button className="btn btn-sm btn-outline-dark" onClick={() => { submitCallback({}, 1, true) }}>
                        reset
                            </button>
                </div>


            </div>

            <button className="btn btn-outline-dark">
                Filter
            </button>

        </form>
    )
}



export default reduxForm({
    form: 'filterproducts'
})(FilterForm);