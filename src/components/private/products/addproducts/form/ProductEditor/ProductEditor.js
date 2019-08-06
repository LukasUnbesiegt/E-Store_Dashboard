import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import styles from './ProductEditor.module.css'
import '../../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ProductEditor extends Component {







    render() {




        return (
            <div className="container">
                <div className="row">

                    <div className="col-12">

                        <h4>Add Product Description</h4>
                        <Editor
                            wrapperClassName={styles.editorwrapper}
                            editorClassName={styles.editor}
                            editorState={this.props.editorState}
                            onEditorStateChange={this.props.onEditorStateChange}
                        />
                    </div>

                </div>


            </div>
        )
    }
}




export default ProductEditor;