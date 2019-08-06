
import React, { Component } from 'react'
import Form from './form/form'
import { connect } from 'react-redux'
import {createSlider} from '../../../../../actions/siteSettings/siteSettings'

class index extends Component {


    submitHandler = (data) => {


        this.props.createSlider(data , this.props.siteContentId)
      


    }


    render() {
        let collections;
    

  if (this.props.collections) {
            collections = this.props.collections.map((collection) => {
                return {
                    key: collection.name,
                    value: collection._id
                }
            })
        }

        return (
            <div className="container my-3 py-3">
               
                    <h4 className="text-center">Slider Creation</h4>
                <Form
                    submitCallBack={this.submitHandler}
                    collections={collections || []}

                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    collections : state.products ? state.products.collections : []  ,
    siteContentId : state.contents.sliders ? state.contents.sliders.id : null
})

const mapDispatchToProps = {
createSlider
}



export default connect(mapStateToProps, mapDispatchToProps)(index);