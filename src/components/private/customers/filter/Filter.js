import React, { Component } from 'react'
import FilterForm from './FilterForm'
import Pagination from '../../../misc/pagination/Pagination'
import { connect } from 'react-redux'
import { isEmpty, omit } from '../../../../utils/isEmpty'

import orders from '..';



class Filter extends Component {



    state = {
        data: null
    }



    submitHandler = (data, page = 1, reset) => {


        let filters;


        if (!isEmpty(data)) {
            // there is data , filter button apply
            filters = omit(data, 'order')
            // when data is changed or we apply filter button , we need to update state for pagination button
            this.setState({
                data: data
            })





        } else {



            if (!isEmpty(this.state.data)) {

                let omitedData = reset ? data : this.state.data;
                filters = omit(omitedData, 'order')
            }

        }



    }



    render() {



        const { ordersTable } = this.props;



        return (

            <div className="my-1 py-1">

                <FilterForm
                    submitCallback={this.submitHandler}
                    reset={this.props.filtersOrders}
                />

                <div className="">
                    <Pagination
                        items={ordersTable ? ordersTable : []}
                        submitCallback={this.submitHandler}
                        isActiveColor={`#43e97b`}
                    />

                </div>





            </div>
        )
    }
}




const mapStateToProps = (state) => ({

})



const mapDispatchToProps = {

}






export default connect(mapStateToProps, mapDispatchToProps)(Filter);