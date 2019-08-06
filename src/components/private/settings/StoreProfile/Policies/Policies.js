import React, { Component } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { addStoreInfo } from '../../../../../actions/adminSettings'
import AddPoliciesForm from './Form/AddPoliciesForm'
import { connect } from 'react-redux'


class Policies extends Component {




    submitHandler = (data) => {

        let store;

        if (this.props.initialValues && this.props.initialValues.store) {
            store = this.props.initialValues.store
        }

        if (this.props.initialValues) {


            this.props.addStoreInfo(store, data)


        } else {

            this.props.addStoreInfo(store, data)


        }


    }



    render() {











        return (





            <div
                className=""


            >


                <AddPoliciesForm
                    submitCallback={this.submitHandler}
                    initialValues={this.props.initialValues ? this.props.initialValues.policies : null}
                />


            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    initialValues: state.admin.store ? state.admin.store : null
})

const mapDispatchToProps = {
    addStoreInfo
}



export default connect(mapStateToProps, mapDispatchToProps)(Policies);