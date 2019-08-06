import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPromo, clearPromotion, editPromo } from '../../../../actions/adminActions'



import AddPromotionsForm from './AddPromotionsForm'






class AddPromotions extends Component {




    handleSubmitHandler = (data) => {


        if (this.props.initialValues) {

            this.props.editPromo(this.props.initialValues._id, data)

        } else {
            this.props.addPromo(data)

        }



    }

    render() {







        return (


            <div className="text-center">

                <h4 className="text-center display-4"> Add Promo Codes</h4>
                <AddPromotionsForm
                    submitCallback={this.handleSubmitHandler}
                    initialValues={this.props.initialValues}
                    clearPromotion={this.props.clearPromotion}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    initialValues: state.admin.promotion
})

const mapDispatchToProps = {
    addPromo, clearPromotion,
    editPromo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPromotions);