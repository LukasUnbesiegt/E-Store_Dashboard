import React, { Component, Fragment } from 'react'
import AddDeliveryForm from './AddDelivery/AddDeliveryForm'
import { addDelivery, deleteDelivery, editDelivery, updateDelivery } from '../../../../actions/settingsActions'
import { clearForm } from '../../../../actions/helpers'
import { connect } from 'react-redux'
import DeliveryTable from '../../../misc/table/Table';
import { Button, ButtonGroup } from 'reactstrap'




class Delivery extends Component {





    state = {

        isFormOpen: false
    }


    openForm = () => {



        this.setState({ isFormOpen: !this.state.isFormOpen });



    }



    submitCallbackHandler = (data) => {


        if (this.props.delivery) {


            this.props.updateDelivery(data, data._id)
        } else {
            this.props.addDelivery(data)

        }

    }





    render() {

        const { deliveries } = this.props;
        const tableheads = ['township', 'town', 'price']

        return (
            <Fragment>
                <h3 className="display-4 text-center mb-3">
                    Delivery Informations

                </h3>

                <div className="container">

                    <div className="row">
                        <div className="col-12 text-center py-4 ">
                            <ButtonGroup>
                                <Button onClick={() => this.openForm()}>Add Delivery</Button>
                                <Button onClick={() => this.openForm()}>Manage Delivery</Button>

                            </ButtonGroup>
                        </div>
                    </div>
                    {
                        this.state.isFormOpen && <div className="row">
                            <div className="col-12 my-3 text-center">
                                <AddDeliveryForm

                                    submitCallback={this.submitCallbackHandler}
                                    updateDelivery={this.props.updateDelivery}
                                    initialValues={this.props.delivery}
                                    clearForm={this.props.clearForm}
                                />
                            </div>


                        </div>
                    }

                    <div className="row">

                        <DeliveryTable
                            tableheads={tableheads}
                            rows={deliveries || []}
                            deleteDelivery={this.props.deleteDelivery}
                            editDelivery={this.props.editDelivery}
                            openForm={(value) => {
                                this.openForm()
                            }}
                            handlers={
                                [
                                    { name: 'edit', func: this.props.editDelivery },
                                    { name: 'delete', func: this.props.deleteDelivery }


                                ]

                            }

                        />

                    </div>


                </div>



            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    deliveries: state.settings.deliveries,
    delivery: state.settings.deliveryToEdit
})

const mapDispatchToProps = {
    addDelivery,
    deleteDelivery,
    editDelivery,
    updateDelivery,
    clearForm
}


export default connect(mapStateToProps, mapDispatchToProps)(Delivery)