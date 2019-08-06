import React, { Component } from 'react'

import Table from '../../../../misc/table/Table'
import { connect } from 'react-redux'



class DeliveryTable extends Component {



    _editHandler = (data) => {

        this.props.editDelivery(data)
        this.props.openForm(true)
    }


    _deleteHandler = (deliveryId) => {

        this.props.deleteDelivery(deliveryId)

    }

    _viewHandler = () => {
        alert('Nothing more to view for delivery')
    }




    render() {

        const { deliveries } = this.props;
        const tableheads = ['township', 'town', 'price']
        let rows, deliveriesForEdit;

        if (deliveries) {

            rows = deliveries.map((delivery) => {



                return {
                    township: delivery.township,
                    town: delivery.town,
                    price: delivery.price,
                    _id: delivery._id
                }
            })

            deliveriesForEdit = deliveries.map((delivery) => {



                return {
                    township: delivery.township,
                    town: delivery.town,
                    price: delivery.price,
                    _id: delivery._id
                }
            })

        }




        return (
            <div className="container">
                <Table
                    tableheads={tableheads}
                    editHandler={this._editHandler}
                    deleteHandler={this._deleteHandler}
                    viewHandler={this._viewHandler}
                    itemsToMap={deliveriesForEdit}
                    rows={rows}
                />
            </div>
        )
    }
}




const mapDispatchToProps = {

}




export default connect(null, mapDispatchToProps)(DeliveryTable);