import React, { Component } from 'react'
import FilterForm from './FilterForm'
import Pagination from '../../../misc/pagination/Pagination'
import { connect } from 'react-redux'
import { isEmpty, omit } from '../../../../utils/isEmpty'
import { filterProducts, getProductsToTable } from '../../../../actions/productsActions'



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


            this.props.filterProducts({ filters: filters, page: page })


        } else {



            if (!isEmpty(this.state.data)) {

                let omitedData = reset ? data : this.state.data;
                filters = omit(omitedData, 'order')
            }
            this.props.filterProducts({ filters: filters, page: page })
        }



    }



    render() {






        const { productsTable } = this.props;



        return (

            <div className="my-1 py-1">

                <FilterForm
                    submitCallback={this.submitHandler}
                    reset={this.props.getProductsToTable}
                />


                <div className="">
                    <Pagination
                        items={productsTable ? productsTable : []}
                        submitCallback={this.submitHandler}
                    />

                </div>



            </div>
        )
    }
}




const mapStateToProps = (state) => ({
    productsTable: state.products ? state.products.productsTable : null
})



const mapDispatchToProps = {
    filterProducts,
    getProductsToTable
}






export default connect(mapStateToProps, mapDispatchToProps)(Filter);