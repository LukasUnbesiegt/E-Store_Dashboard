import React, { Component } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import OrdersTable from './OrdersTable/OrdersTable'
import OrdersSettings from './OrdersSettings/OrdersSettings'
import OrderDetails from './OrderDetails/OrderDetails'




class Orders extends Component {

    componentDidMount() {
        this.props.getOrdersById()
    }


    render() {

        console.log(this.props.orders)

        return (
            <div className="">
                <HeaderBar
                    title="Orders"
                    sectionTitle="Orders"
                    quantity={this.props.orders ? this.props.orders.totalItems : 0}
                    iconStyle="fa fa-shopping-bag"
                    cat="Manage Orders"
                    linkAdd="/admin/orders/add"
                    linkTable="/admin/orders/"
                    linkSetting="/admin/orders/settings"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/orders/" render={() => <OrdersTable orders={this.props.orders} />} />
                                <Route path="/admin/orders/add/" render={() => <OrdersTable orders={this.props.orders} />} />
                                <Route path="/admin/orders/settings/" component={OrdersSettings} />
                                <Route path="/admin/orders/details/" render={() => <OrderDetails />} />
                            </Switch>


                        </div>



                    </div>




                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.admin ? state.admin.orders : null
})




export default connect(mapStateToProps)(Orders);