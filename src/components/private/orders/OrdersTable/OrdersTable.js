
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { getOrderById } from '../../../../actions/adminActions'
import { changeStatus } from '../../../../actions/customerActions'
import Filter from '../filter/Filter'
import { throws } from 'assert';


class OrdersTable extends Component {




    _editHandler = () => {
        alert('more details')

    }


    _deleteHandler = () => {

        alert('deleted')

    }


    _viewHandler = (id) => {

        this.props.getOrderById(id)
        this.props.history.push('/admin/orders/details/')
    }


    _changeStatusDelivery = (id) => {

        this.props.changeStatus({ status: 'DELIVERED', orderId: id })

    }
    _changeStatusInHouse = (id) => {

        this.props.changeStatus({ status: 'INHOUSE', orderId: id })

    }
    _changeStatusShipping = (id) => {

        this.props.changeStatus({ status: 'SHIPPING', orderId: id })

    }



    render() {




        const { orders } = this.props;
        const tableheads = ['status', 'username', 'phone', 'email', 'orderedDate', 'totalPrice', 'totalQuantity', 'desiredDate', 'payment']
        let rows;

        if (orders) {

            rows = orders.orders.map((order) => {

                let formattedDate = moment(order.orderedDate).format('YYYY-MM-DD')
                let desiredDateFormatted = moment(order.desiredDate).format('YYYY-MM-DD')

                return {
                    status: order.status,
                    username: order.shippingAddress.name,
                    phone: order.shippingAddress.phone,
                    email: order.shippingAddress.email || 'no email',
                    orderedDate: formattedDate,
                    totalPrice: order.cart.totalPrice,
                    totalQuantity: order.cart.totalQuantity,
                    desiredDate: desiredDateFormatted,
                    _id: order._id,
                    payment: order.payment.type
                }
            })



        }



        return (
            <div className="">
                <div className="container-fluid my-2 py-2 card shadow-sm">
                    <Filter />
                </div>

                <Table
                    tableheads={tableheads}
                    rows={rows}
                    handlers={
                        [
                            { name: 'edit', func: this._editHandler },
                            { name: 'delete', func: this._deleteHandler },
                            { name: 'view', func: this._viewHandler },
                            { name: 'set DELIVERED', func: this._changeStatusDelivery },
                            { name: 'set SHIPPING', func: this._changeStatusShipping },
                            { name: 'set INHOUSE', func: this._changeStatusInHouse },

                        ]
                    }

                />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    getOrderById,
    changeStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrdersTable));