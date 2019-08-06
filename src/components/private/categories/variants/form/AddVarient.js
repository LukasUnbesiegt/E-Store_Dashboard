import React, { Component } from 'react'
import AddVarientForm from './AddVarientForm'
import { connect } from 'react-redux'
import { addVariant, deleteVariant } from '../../../../../actions/productsActions'


class AddVarient extends Component {




    handleSubmitHandler = (data) => {

        this.props.addVariant(data)


    }


    deleteVariant = (id) => {
        this.props.deleteVariant(id)
    }



    renderVariants = () => {

        const { variants } = this.props;


        if (variants && variants.length > 0) {

            return variants.map((variant) => {


                return (<li className="list-group-item d-flex justify-content-between align-items-center">
                    {variant.name}
                    <span className="">
                        <a
                            onClick={() => { this.deleteVariant(variant._id) }}
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
                <h5>No variants at the moment</h5>
            )
        }


    }


    render() {




        return (
            <div className="container-fluid ">

                <div className="row text-center">

                    <div className="col-12">

                        <ul class="list-group">
                            {this.renderVariants()}
                        </ul>

                    </div>

                </div>

                <div className="row text-center mt-5">

                    <div className="col-12">
                        <h4>Add Variant</h4>
                        <AddVarientForm

                            submitCB={this.handleSubmitHandler}
                        />


                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    variants: state.products ? state.products.variants : null
})

const mapDispatchToProps = {
    addVariant,
    deleteVariant
}



export default connect(mapStateToProps, mapDispatchToProps)(AddVarient);