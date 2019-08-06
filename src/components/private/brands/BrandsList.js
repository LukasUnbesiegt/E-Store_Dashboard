import React, { Component } from 'react'
import AddBrandForm from './form/AddBrandForm'
import { connect } from 'react-redux'
import { addBrand, deleteBrand } from '../../../actions/productsActions'
import { isEmpty } from '../../../utils/isEmpty'



class AddBrand extends Component {





    formSubmitHandler = (data) => {

        console.log('submitted brands')

        this.props.addBrand(data)

    }


    deleteBrand = (brandId) => {
        this.props.deleteBrand(brandId)
    }


    renderBrands = () => {

        const { brands } = this.props;


        if (brands.brands && brands.brands.length > 0) {

            return brands.brands.map((brand) => {


                return (<li className="list-group-item d-flex justify-content-between align-items-center">
                    {brand.name}
                    <span className="">
                        <a
                            onClick={() => { this.deleteBrand(brand._id) }}
                        ><i className="ni ni-fat-remove"
                            style={{
                                color: 'green',
                                fontSize: '28px'

                            }}

                        >
                            </i>
                        </a>
                    </span>
                </li>)


            })


        } else {
            return (
                <h5>No Brands at the moment</h5>
            )
        }









    }



    render() {







        return (
            <div className="container-fluid my-2 py-2 ">

                <div className="row text-center">

                    <div className="col-12">

                        <ul class="list-group">
                            {this.renderBrands()}
                        </ul>

                    </div>

                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    brands: state.products
})

const mapDispatchToProps = {
    addBrand,
    deleteBrand

}


export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);