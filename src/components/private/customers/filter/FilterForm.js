import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'
import SingleDate from '../../../misc/forms/dates/SingleDate'
import SelectInput from '../../../misc/forms/inputs/SelectInput'
import moment from 'moment'



function FilterForm({
    submitCallback, handleSubmit, reset
}) {


    const options = [
        {
            key: 'INHOUSE',
            value: 'INHOUSE'
        },
        {
            key: 'SHIPPING',
            value: 'SHIPPING'
        },
        {
            key: 'DELIVERED',
            value: 'DELIVERED'
        }
    ]

    return (


        <form
            onSubmit={handleSubmit(submitCallback)}
            className="text-center"
        >

            <div
                className="row"
            >

                <div className="col">
                    <Field
                        name="shippingAddress.phone"
                        component={TextInput}
                        placeholder="phone"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                </div>
                <div className="col">

                    <Field
                        name="shippingAddress.email"
                        component={TextInput}
                        placeholder="email"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                </div>

                <div className="col">
                    <label>desireDate</label>
                    <Field
                        name="desireDate"
                        component={SingleDate}
                        format={(value) => value ? moment(value) : undefined}
                        normalize={(data) => data && data.value && data.value.format()}
                        isOutsideRange={() => false}
                    />


                </div>
                <div className="col">
                    <label>orderedDate</label>
                    <Field
                        name="orderedDate"
                        component={SingleDate}
                        format={(value) => value ? moment(value) : undefined}
                        normalize={(data) => data && data.value && data.value.format()}
                        isOutsideRange={() => false}
                    />


                </div>
                <div className="col">
                    <label>Status</label>
                    <Field
                        name="status"
                        component={SelectInput}
                        options={options || []}

                    />


                </div>


                <div className="col">

                    <button className="btn btn-sm btn-outline-warning" onClick={() => { submitCallback({}, 1, true) }}>
                        reset
                     </button>
                </div>


            </div>

            <button className="btn btn-outline-warning">
                Filter
            </button>

        </form>
    )
}



export default reduxForm({
    form: 'filterorders'
})(FilterForm);