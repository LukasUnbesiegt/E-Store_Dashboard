
import React, { Component } from 'react'
import Table from '../../../misc/table/Table'
import moment from 'moment'
import { deletePromotion, getSinglePromo } from '../../../../actions/adminActions'
import { connect } from 'react-redux'


class PromotionsTable extends Component {






    _editHandler = (id) => {

        this.props.getSinglePromo(id)


    }

    _deleteHandler = (id) => {


        this.props.deletePromotion(id)

    }

    _viewHandler = () => {

        alert('Nothing to view for promotion')

    }

    render() {
        let rows;
        const { promotions } = this.props;
        let tableheads = ['name', 'percent', 'quantity', 'createdAt']

        if (promotions) {

            rows = promotions.promotions.map((promotion) => {

                let formattedDate = moment(promotion.createdAt).format('YYYY-MM-DD') || 'no date'


                return {
                    name: promotion.name,
                    percent: promotion.percent,
                    quantity: promotion.quantity,
                    createdAt: formattedDate || 'no date',
                    _id: promotion._id
                }
            })


        }

        return (




            <div>
                <Table
                    tableheads={tableheads}
                    rows={rows}
                    handlers={[

                        { name: 'edit', func: this._editHandler },
                        { name: 'delete', func: this._deleteHandler },
                        { name: 'view', func: this._viewHandler }


                    ]}

                />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    deletePromotion,
    getSinglePromo
}



export default connect(mapStateToProps, mapDispatchToProps)(PromotionsTable) 