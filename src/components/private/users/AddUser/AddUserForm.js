import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'
import SelectInput from '../../../misc/forms/inputs/SelectInput'


const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.name = 'Username is required'
    }

    if (!values.email) {
        errors.price = 'email is required'
    }
    if (!values.role) {
        errors.sku = 'sku required for product'
    }



    return errors
}


class AddUserForm extends Component {


    componentWillUnmount() {


        this.props.clearForm('GET_SINGLE_USER')
    }

    render() {


        const roles = [
            { key: 'Admin', value: 2 },
            { key: 'Editor', value: 1 },


        ];
        const { handleSubmit, submitCallback, valid, errorsServer, submitting, pristine, initialValues } = this.props;


        const renderErrors = () => {

            const errorsArr = Object.keys(errorsServer)

            return errorsArr.map((errName) => {

                return (
                    <span
                        style={{
                            color: 'red'
                        }}

                    >
                        {errorsServer[errName]}

                    </span>
                )

            })


        }




        return (


            <form
                onSubmit={handleSubmit(submitCallback)}

            >


                <Field
                    component={TextInput}
                    name="username"
                    placeholder="Username"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}


                />
                <Field
                    component={TextInput}
                    name="email"
                    placeholder="email"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}


                />

                <Field
                    component={TextInput}
                    name="password"
                    placeholder={this.props.initialValues ? 'change new password' : 'password'}
                    type="password"
                    styleFrom={{
                        color: 'black'
                    }}


                />

                <label>Choose Role</label>
                <Field
                    component={SelectInput}
                    name="role"
                    placeholder="role"
                    type="text"
                    options={roles}


                />

                <div className="m-2">
                    {renderErrors()}
                </div>
                <button
                    className="btn btn-outline-dark"
                    disabled={!valid || pristine || submitting}

                >

                    {
                        initialValues ? 'Edit User' : 'Add User'
                    }
                </button>


            </form>
        )
    }
}





export default reduxForm({
    form: 'adduser',
    validate
})(AddUserForm);
