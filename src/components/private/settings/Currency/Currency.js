import React, { Component, Fragment } from 'react'
import { Table, Button, ButtonGroup } from 'reactstrap';


import AddCurrencyForm from './AddCurreny/AddCurrencyForm'


class Currency extends Component {

    state = {

        isFormOpen: false
    }
    openForm = () => {
        this.setState({ isFormOpen: !this.state.isFormOpen });

    }

    render() {



        return (
            <Fragment>
                <h3 className="display-4 text-center mb-3">
                    Currency Settings

                </h3>


                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-4 ">
                            <ButtonGroup>
                                <Button onClick={() => this.openForm()}>Add Currency</Button>
                                <Button>Manage Currency</Button>

                            </ButtonGroup>
                        </div>
                    </div>
                    {
                        this.state.isFormOpen && <div className="row">
                            <div className="col-12">
                                <AddCurrencyForm />
                            </div>


                        </div>
                    }


                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            USD
    <span className="badge badge-success badge-pill">1580</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            EURO
    <span className="badge badge-success badge-pill">1700</span>
                        </li>

                    </ul>


                </div>
            </Fragment>
        )
    }
}




export default Currency;