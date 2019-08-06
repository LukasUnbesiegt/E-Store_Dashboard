
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../../misc/forms/inputs/TextInput'
import TextArea from '../../../../../misc/forms/inputs/TextArea'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';




class BasicInfoForm extends Component {




    // componentWillUnmount = () => {

    //     this.props.clearForm('GET_STORE_PROFILE')
    // }


    render() {



        const { submitCallback,
            handleSubmit,
            country,
            region,
            selectRegion,
            selectCountry,
            initialValues } = this.props;




        return (


            <form
                onSubmit={handleSubmit(submitCallback)}

            >

                <div
                    className="container my-2"
                >

                    <h4
                        className="display-5 text-center"
                    >Store Contact Details</h4>


                    <Field
                        component={TextInput}
                        placeholder="store name"
                        name="name"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                    <Field
                        component={TextInput}
                        placeholder="company name (optional)"
                        name="company"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                    />

                    <Field
                        component={TextInput}
                        placeholder="email address"
                        name="email"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                    />
                    <Field
                        component={TextInput}
                        placeholder="phone number"
                        name="phone"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                    />

                    <Field
                        component={TextInput}
                        placeholder="your facebook page link"
                        name="social.facebook"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                        prepend
                        logo={"fab fa-facebook-square"}
                    />
                    <Field
                        component={TextInput}
                        placeholder="your youtube channel link"
                        name="social.youtube"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                        prepend
                        logo={"fab fa-youtube"}
                    />
                    <Field
                        component={TextInput}
                        placeholder="your instagram channel link"
                        name="social.instagram"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                        prepend
                        logo={"fab fa-instagram"}
                    />

                </div>

                <div
                    className="container my-2 py-2"
                >

                    <h4
                        className="display-5 text-center"
                    >Store Billing Address</h4>


                    <Field
                        component={TextArea}
                        placeholder="address line 1 "
                        name="address.line1"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                        rows={4}
                    />
                    <Field
                        component={TextArea}
                        placeholder="address line 2"
                        name="address.line2"
                        type="text"
                        styleFrom={{
                            color: 'black'
                        }}
                        rows={4}
                    />

                    <div className="container mb-3">


                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-2">


                                <CountryDropdown
                                    value={country}
                                    onChange={(val) => selectCountry(val)}
                                    classes="custom-select"
                                />

                            </div>
                            <div className="col-lg-6 col-sm-12">

                                <RegionDropdown
                                    country={country}
                                    value={region}
                                    onChange={(val) => selectRegion(val)}
                                    classes="custom-select"
                                />


                            </div>


                        </div>




                    </div>
                    <Field
                        component={TextInput}
                        placeholder="zip code"
                        name="address.zip"
                        type="number"
                        styleFrom={{
                            color: 'black'
                        }}
                    />



                    <button
                        className="btn  btn-block"
                        style={{
                            backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                            color: 'white'
                        }}
                    >
                        {
                            initialValues ? 'edit store info' : 'add store info'
                        }
                    </button>


                </div>



            </form>
        )
    }
}






export default reduxForm({
    form: 'storeinfo'
})(BasicInfoForm);