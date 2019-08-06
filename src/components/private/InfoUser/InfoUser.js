import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import FormComp from './UserInfo/Form'



class InfoUser extends Component {




    handleSubmitHandler = () => {
        console.log('submitted');
    }

    render() {

        const { userData } = this.props.user;
        let userInfo;


        if (userData) {
            userInfo = {
                email: userData.email,
                username: userData.username
            }

        }






        return (
            <Fragment>
                <h1 className="display-3 text-center" >USER SETTINGS</h1>
                <div className="container text-center">

                    <FormComp
                        initialValues={userInfo}
                        onSubmitCB={this.handleSubmitHandler}

                    />

                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(InfoUser);