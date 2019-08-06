import React, { Component } from 'react'
import BasicInfoForm from './Form/BasicInfoForm'
import { addStoreInfo, getStoreProfile } from '../../../../../actions/adminSettings'
import { connect } from 'react-redux'


class BasicInfo extends Component {



    componentDidMount = () => {
        this.props.getStoreProfile()
    }



    submitHandler = (data) => {

        let store = {

            ...data,
            address: {
                ...data.address,
                country: this.state.country,
                region: this.state.region
            }

        }
        let policies;
        if (this.props.initialValues && this.props.initialValues.policies) {
            policies = this.props.initialValues.policies
        }

        if (this.props.initialValues) {


            this.props.addStoreInfo(store, policies)

        } else {
            this.props.addStoreInfo(store, policies)

        }




    }

    state = {
        country: this.props.initialValues ? this.props.initialValues.store.address.country : '',
        region: this.props.initialValues ? this.props.initialValues.store.address.region : ''
    }


    selectCountry = (val) => {

        this.setState({ country: val });
    }

    selectRegion = (val) => {
        this.setState({ region: val });
    }


    render() {








        return (


            <div
                className="my-2 py-2"


            >

                <BasicInfoForm
                    submitCallback={this.submitHandler}
                    country={this.state.country}
                    region={this.state.region}
                    selectCountry={this.selectCountry}
                    selectRegion={this.selectRegion}
                    initialValues={this.props.initialValues ? this.props.initialValues.store : null}



                />



            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    initialValues: state.admin.store ? state.admin.store : null
})

const mapDispatchToProps = {
    addStoreInfo,
    getStoreProfile
}



export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);