import React, { Component, Fragment } from "react";
import { toastr } from "react-redux-toastr";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { connect } from "react-redux";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";
import { isEmpty } from "../../../../../utils/isEmpty";

import {
	deleteOriginalImg,
	sendSingleImage
} from "../../../../../actions/productsActions";

class ProductPhotos extends Component {
	state = {
		file: null,
		files: [],
		image: {}
	};

	componentWillReceiveProps = prevProps => {
		if (prevProps.initialImage) {
			console.log("happen");
			this.setState(
				{
					image: prevProps.initialImage
				},
				() => {
					console.log("prevProps Image", this.state.image);
				}
			);
		}
	};

	onDrop = files => {
		this.setState(
			{
				file: URL.createObjectURL(files[0])
			},
			() => {}
		);
	};

	cropImage = () => {
		if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
			return;
		}
		console.log("crop happen");
		this.refs.cropper.getCroppedCanvas().toBlob(blob => {
			let imgUrl = URL.createObjectURL(blob);

			this.setState({
				image: {
					cropResult: imgUrl,
					image: blob
				}
			});
		});
	};

	cancelCrop = () => {
		this.setState({
			file: null,
			image: {}
		});
	};

	uploadPhoto = () => {
		const { input } = this.props;
		if (this.state.image) {
			const blobs = this.state.filesCropped.map(file => {
				return file.blob;
			});
			const blob = this.state.image.image;

			this.props.sendSingleImage(blob).then(data => {
				this.setState(
					(previousState, currentProps) => {
						return {
							file: null,
							image: data.payload.result
						};
					},
					() => {
						input.onChange(this.state.image);
					}
				);
			});
		}
	};

	deleteImage = (imageId, productId) => {
		this.props.deleteOriginalImg(imageId, productId);

		this.setState(
			{
				image: {}
			},
			() => {
				this.props.input.onChange(this.state.image);
				toastr.warning("deleted");
			}
		);
	};

	renderUploadedImage = () => {
		if (!isEmpty(this.state.image)) {
			const { image } = this.state;

			return (
				<div>
					<i
						className="ni ni-fat-remove"
						style={{
							cursor: "pointer",
							fontSize: "30px",
							color: "red"
						}}
						onClick={() => {
							this.deleteImage(image.public_id, this.props.productId);
						}}
					/>
					)
					<br />
					<img
						style={{ height: "200px", width: "200px", objectFit: "cover" }}
						src={image.url}
						alt="Card image cap"
					/>
				</div>
			);
		} else {
		}
	};

	render() {
		console.log("initial image", this.props.initialImage);
		return (
			<Fragment>
				<div className="container-fluid my-4">
					<div className="row">
						<div className="col-md-4 col-lg-4">
							<Dropzone
								onDrop={this.onDrop}
								minSize={0}
								maxSize={5242880}
								multiple={false}
								accept="image/*"
							>
								{({ getRootProps, getInputProps }) => (
									<div class="custom-file" {...getRootProps()}>
										<input
											type="file"
											class="custom-file-input"
											id="customFile"
											{...getInputProps()}
										/>
										>
										<label class="custom-file-label">
											{this.state.fieldName || "upload photo"}
										</label>
									</div>
								)}
							</Dropzone>
						</div>
						<div className="col-md-6 col-lg-6">
							{this.state.files[0] && (
								<div className="row">
									<div className="col-md-8">
										<Cropper
											style={{ height: 200, width: "100%" }}
											ref="cropper"
											src={this.state.files[0]}
											aspectRatio={1}
											viewMode={0}
											dragMode="move"
											guides={false}
											scalable={false}
											cropBoxMovable={true}
											cropBoxResizable={true}
											crop={this.cropImage}
										/>
									</div>
									<div className="col-md-4">
										<div className="btn-group btn-group-sm" role="group">
											<button
												onClick={() => {
													this.uploadPhoto();
												}}
												type="button"
												class="btn btn-danger"
											>
												Upload
											</button>
											<button
												onClick={() => {
													this.cancelCrop();
												}}
												type="button"
												class="btn btn-secondary"
											>
												Cancel
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "flex-start",
						flexWrap: "wrap",
						margin: "20px"
					}}
				>
					{this.renderUploadedImage()}
				</div>
			</Fragment>
		);
	}
}

const mapDispatchToProps = {
	deleteOriginalImg,
	sendSingleImage
};

export default connect(
	null,
	mapDispatchToProps
)(ProductPhotos);
