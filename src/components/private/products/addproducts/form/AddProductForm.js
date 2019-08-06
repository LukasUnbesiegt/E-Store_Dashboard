import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import CheckBox from '../../../../misc/forms/inputs/RadioInput'
import SelectInput from '../../../../misc/forms/inputs/SelectInput'
import MultipleSelect from '../../../../misc/forms/inputs/MultiSelectInput'
import DetailsFields from './DetailsFields'
import FieldArray from './FieldArray'
import Editor from '../../../../misc/forms/editor/Editor'
import ProductPhotos from './ProductPhotos/ProductPhotos';






const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Product Name is required'
    }

    if (!values.price) {
        errors.price = { normal: 'price required', promo: 'promo price required . if there is no promo price . add same  price' }
    }
    if (!values.sku) {
        errors.sku = 'sku required for product'
    }
    if (!values.category) {
        errors.category = 'category is required'
    }
    if (!values.brand) {
        errors.brand = 'brand is required'
    }



    return errors
}

class AddProductForm extends Component {


    componentWillUnmount = () => {

        this.props.clearForm('GET_PRODUCT_EDIT')
    }


    render() {


        const { handleSubmit, initialValues, categories, brands,
            submitCallback, editorState, onEditorStateChange,
            valid, errors, submitting, pristine, sendImages, change, variants } = this.props;

        let finalVariants = [...variants, { name: 'color' }, { name: 'weight' }, { name: 'size' }]


        return (



            <form
                onSubmit={handleSubmit(submitCallback)}
                className="was-validated"
            >

                <Field
                    component={TextInput}
                    name="name"
                    placeholder="name"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}

                />

                <Field
                    component={TextInput}
                    name="price.normal"
                    placeholder="price"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}
                />

                <Field
                    component={TextInput}
                    name="price.promo"
                    placeholder="promo price"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}
                />
                <Field
                    component={TextInput}
                    name="sku"
                    placeholder="SKU"
                    type="text"
                    styleFrom={{
                        color: 'black'
                    }}
                />
                <Field
                    component={TextInput}
                    name="stocks"
                    placeholder="Stocks"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}
                />

                <label>Categories</label>
                <Field
                    component={SelectInput}
                    name="category"
                    placeholder="category"
                    type="text"
                    options={categories || []}
                    styleForm={{
                        color: 'black'
                    }}
                />

                <label>Brands</label>
                <Field
                    component={SelectInput}
                    name="brand"
                    placeholder="brand"
                    type="text"
                    options={brands || []}
                    styleForm={{
                        color: 'black'
                    }}
                />

                <label>Collections</label>
                <Field
                    component={MultipleSelect}
                    name="collections"
                    placeholder="collections"
                    type="text"
                    options={this.props.collections || []}
                    styleForm={{
                        color: 'black'
                    }}
                    change={change}

                />

                <Field
                    component={TextInput}
                    name="likes"
                    placeholder="Likes"
                    type="number"
                    styleFrom={{
                        color: 'black'
                    }}
                />

                <DetailsFields />

                <label className="text-muted" style={{ fontSize: '20px' }}>Variants for product</label>
                {
                    finalVariants.map((variant) => {


                        return (
                            <div className="left">
                                <FieldArray
                                    name={variant.name}
                                    placeholder={variant.name}

                                />

                            </div>
                        )


                    })
                }


                <Field
                    component={ProductPhotos}
                    name="images"
                    initialImages={initialValues ? initialValues.images : []}
                    productId={initialValues ? initialValues._id : null}

                />


                <div>

                    <Field
                        name="description"
                        component={Editor}
                        initialContent={initialValues ? initialValues.description : '<p></p>'}
                        description={"product description"}

                    />

                </div>


                <button
                    className="btn btn-outline-dark"
                    disabled={pristine || submitting}
                    type="submit"

                >
                    {
                        initialValues ? 'Edit product ' : ' Add Product'
                    }

                </button>

            </form>
        )
    }
}







export default reduxForm({
    form: 'addproduct',
    validate: validate


})(AddProductForm);