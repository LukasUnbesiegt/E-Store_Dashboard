import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LocalPayments from './local/LocalPayments'
import InterPayments from './inter/InterPayments'
import { addPayment } from '../../../../actions/adminSettings'

class Payment extends Component {









    render() {









        return (



            <div
                className="container-fluid"

            >

                <h4
                    className="text-center display-4"
                > Payment Settings</h4>


                <div
                    className="my-2 py-2 text-center"

                >
                    <div className="btn-group" role="group" aria-label="">


                        <NavLink
                            className="btn "
                            to="/admin/settings/payment/local"
                            style={{
                                backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                color: 'white'
                            }}
                        >
                            Local
                    </NavLink>
                        <NavLink
                            className="btn "
                            to="/admin/settings/payment/inter"
                            style={{
                                backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                color: 'white'
                            }}
                        >
                            International
                    </NavLink>


                    </div>





                </div>



                <div
                    className="container"

                >


                    <Switch>
                        <Route exact path="/admin/settings/payment/"
                            render={() =>
                                <LocalPayments
                                    payments={this.props.payments}
                                    siteId={this.props.siteId}
                                    addPayment={this.props.addPayment}

                                />


                            } />


                        <Route
                            exact
                            path="/admin/settings/payment/local"
                            render={
                                () => <LocalPayments
                                    payments={this.props.payments}
                                    siteId={this.props.siteId}
                                    addPayment={this.props.addPayment}
                                />

                            }

                        />
                        <Route
                            path="/admin/settings/payment/inter"
                            render={
                                () =>
                                    <InterPayments
                                        payments={this.props.payments}
                                        siteId={this.props.siteId}
                                        addPayment={this.props.addPayment}
                                    />

                            }
                        />
                    </Switch>



                </div>




            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    payments: state.admin.store ? state.admin.store.payments : null,
    siteId: state.admin.store ? state.admin.store._id : null
})

const mapDispatchToProps = {
    addPayment
}





export default connect(mapStateToProps, mapDispatchToProps)(Payment);