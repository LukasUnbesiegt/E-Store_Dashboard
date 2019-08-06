
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { addFAQ } from '../../../../../actions/siteSettings/siteSettings'






class index extends Component {



    submitCallBack = (data) => {
        this.props.addFAQ(data, this.props.siteContentId)
    }


    render() {
        return (
            <Fragment>
                <h3 className="display-4 text-center">
                    Add Frequently Ask Questions
                </h3>

                <div className="">



                    <div>


                        <Form
                            submitCallBack={this.submitCallBack}

                        />
                    </div>




                </div>



            </Fragment >
        )
    }
}



const mapStateToProps = (state) => ({
    siteContentId: state.contents.sliders ? state.contents.sliders.id : null
})

const mapDispatchToProps = {
    addFAQ
}



export default connect(mapStateToProps, mapDispatchToProps)(index);