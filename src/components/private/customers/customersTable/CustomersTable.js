
import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Table from '../../../misc/table/Table'


class CustomersTable extends Component {


    _editHandler = (id) => {

        alert('you cannot edit customer')


    }

    _deleteHandler = (id) => {

        alert('you cannot delete customer')


    }

    _viewHandler = () => {

        alert('Nothing to view for customers')

    }




    render() {

        let rows;
        let tableheads = ['username', 'phone', 'createdAt']


        if (this.props.customers && this.props.customers.customers.length > 0) {

            rows = this.props.customers.customers.map((customer) => {

                let momentDate = moment(customer.createdAt).format('YYYY MM DD')

                return {

                    username: customer.facebook.username || 'phone user',
                    phone: customer.facebook.email,
                    createdAt: momentDate




                }

            })

        }





        return (
            <div>
                <Table
                    tableheads={tableheads}
                    rows={rows}

                    handlers={
                        [
                            { name: 'edit', func: this._editHandler },
                            { name: 'delete', func: this._deleteHandler },
                            { name: 'view', func: this._viewHandler }

                        ]
                    }
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    customers: state.admin.customers
})

const mapDispatchToProps = {


}



export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);