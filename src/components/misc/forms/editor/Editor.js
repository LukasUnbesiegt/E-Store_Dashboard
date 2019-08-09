import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import styles from "./Editor.module.css";
import "../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

class EditorComponent extends Component {
	// initializing empty editor state
	state = {
		editorState: EditorState.createEmpty()
	};

	componentWillReceiveProps(prevProps) {
		const html = prevProps.initialContent;
		console.log("content", html);
		const contentBlock = htmlToDraft(html);
		const contentState = ContentState.createFromBlockArray(
			contentBlock.contentBlocks
		);
		const editorState = EditorState.createWithContent(contentState);

		if (this.props.initialContent !== prevProps.initialContent) {
			this.setState({
				editorState: editorState
			});
		}
	}

	onEditorStateChange = editorState => {
		this.setState({
			editorState
		});
	};

	render() {
		const { input } = this.props;

		return (
			<div className="container my-3 py-3">
				<div className="">
					<div className="col-12">
						<h4>{this.props.description}</h4>
						<Editor
							editorClassName={`${styles.editor}`}
							editorState={this.state.editorState}
							onEditorStateChange={this.onEditorStateChange}
							onChange={contentState => {
								let htmlContents = draftToHtml(
									convertToRaw(this.state.editorState.getCurrentContent())
								);

								input.onChange(htmlContents);
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default EditorComponent;
