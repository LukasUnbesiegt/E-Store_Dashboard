import React, { Component } from 'react'
import AddCategoryForm from './AddCategoryForm'
import { connect } from 'react-redux'
import { addCategory, deleteCategory } from '../../../../actions/productsActions'
import { isEmpty } from '../../../../utils/isEmpty'



class AddCategory extends Component {





    formSubmitHandler = (data) => {

        console.log('submitted categories')

        this.props.addCategory(data)

    }


    deleteCategory = (catId) => {
        this.props.deleteCategory(catId)
    }


    renderCategories = () => {

        const { categories } = this.props;


        if (categories.categories && categories.categories.length > 0) {

            return categories.categories.map((category) => {


                return (<li className="list-group-item d-flex justify-content-between align-items-center">
                    {category.name}
                    <span className="">
                        <a
                            onClick={() => { this.deleteCategory(category._id) }}
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
                <h5>No categories at the moment</h5>
            )
        }









    }



    render() {







        return (
            <div className="container-fluid ">



                <div className="row text-center mt-5">

                    <div className="col-12">
                        <h4>Add Category</h4>
                        <AddCategoryForm

                            submitCB={this.formSubmitHandler}
                        />


                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.products
})

const mapDispatchToProps = {
    addCategory,
    deleteCategory

}


export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);