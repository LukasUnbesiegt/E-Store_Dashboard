import React, { Component } from 'react'
import AddCollectionForm from './AddCollectionForm'
import { connect } from 'react-redux'
import { addCollection, deleteCollection } from '../../../../../actions/productsActions'


class AddCollection extends Component {




    handleSubmitHandler = (data) => {

        this.props.addCollection(data)

    }


    deleteCollection = (id) => {
        this.props.deleteCollection(id)
    }





    render() {




        return (
            <div className="container-fluid ">



                <div className="row text-center mt-5">

                    <div className="col-12">
                        <h4>Add Collection</h4>
                        <AddCollectionForm

                            submitCB={this.handleSubmitHandler}
                        />


                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    collections: state.products ? state.products.collections : null
})

const mapDispatchToProps = {
    addCollection,
    deleteCollection
}



export default connect(mapStateToProps, mapDispatchToProps)(AddCollection);