
import React from 'react'
import { Field } from 'redux-form'



function DetailsFields() {


    return (
        <div className="d-flex">


            <div className="mr-3">
                <label className="mr-1" htmlFor="featured">On Sales</label>
                <Field
                    name="details.onsale"
                    id="featured"
                    component="input"
                    type="checkbox"

                />

            </div>

            <div className="mr-3">
                <label className="mr-1" htmlFor="featured">Cash On Delivery Available</label>
                <Field
                    name="details.cod"
                    id="featured"
                    component="input"
                    type="checkbox"
                />

            </div>




        </div>
    )
}




export default DetailsFields;