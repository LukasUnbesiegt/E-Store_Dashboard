
import React, { Component, Fragment } from 'react'
import { toastr } from 'react-redux-toastr'
import Dropzone  from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { deleteOriginalImg, sendImages } from '../../../../../actions/productsActions'






class ProductPhotos extends Component {


    state = {

        files: [],
        image: {},
        fieldName: '',
        filesCropped: [],
        images: []

    }

    componentWillReceiveProps = (prevProps) => {


        if (prevProps.initialImages.length > 0) {
            console.log('happen')
            this.setState({
                images: [...prevProps.initialImages]
            }, () => {
                console.log(this.state.images)
            })
        }




    }

    onDrop = (files) => {

       console.log('files' , files);
        this.setState({
            files: [URL.createObjectURL(files[0])],
            fileName: files[0].name
        })

    }



    cropImage = () => {

        if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }

        this.refs.cropper.getCroppedCanvas().toBlob((blob) => {

            let imgUrl = URL.createObjectURL(blob)

            this.setState({

                image: {
                    cropResult: imgUrl,
                    image: blob
                }
            })



        })


    }

    loadImages = () => {

        let photosArr, blobsToSend;
        if (this.state.image.image) {
            photosArr = [...this.state.filesCropped, { blob: this.state.image.image, tempurl: this.state.image.cropResult }]


        }
        this.setState({
            filesCropped: photosArr,
        })
    }

    cancelCrop = () => {
        this.setState({
            files: [],
            image: {}
        })
    }


    removeImg = (tempurl) => {

        let filteredFilesCropped = this.state.filesCropped.filter((filecrop) => {
            return filecrop.tempurl !== tempurl
        })
        this.setState({
            filesCropped: filteredFilesCropped,
        })
    }


    uploadPhotos = () => {
        const { input } = this.props;
        if (this.state.filesCropped.length > 0) {


            const blobs = this.state.filesCropped.map((file) => {
                return file.blob
            })
          
            this.props.sendImages(blobs)
                .then((data) => {
                    this.setState((previousState, currentProps) => {
                        return {
                            filesCropped: [],
                            files: [],
                            image: {},
                            images: [...data.payload.results, ...previousState.images]


                        };
                    }, () => {
                        input.onChange(this.state.images)

                    });

                })
        }


    }


    deleteImage = (imageId, productId) => {

        this.props.deleteOriginalImg(imageId, productId)
        let filteredImages = this.state.images.filter((image) => {
            return image.public_id !== imageId;
        })
        this.setState({
            images: filteredImages
        }, () => {
            this.props.input.onChange(this.state.images)
            toastr.warning('deleted')
        })
    }


    renderUploadedImages = () => {
        return this.state.images.map((image, i) => {
            return (
                <div
                >
                    {
                        this.state.images && (
                            <i
                                className="ni ni-fat-remove"
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '30px',
                                    color: 'red'
                                }}
                                onClick={() => {


                                    this.deleteImage(image.public_id, this.props.productId)

                                }}
                            >

                            </i>

                        )
                    }

                    <br />
                    <img style={{ height: '300px', width: '300px' }} src={image.url} alt="Card image cap" />
                </div>
            )


        })

    }





    render() {






        return (




            <Fragment>

                <div className="container-fluid my-4">
                    <h4 className="text-center">Upload Photos</h4>
                    <div className="row">

                        <div className="col-md-4 col-lg-4">

                    <Dropzone
                     onDrop={this.onDrop }  
                     minSize={0}
                         maxSize={5242880}
                         multiple={false}
                         accept="image/*"
                         >
  {({getRootProps, getInputProps}) => (
   
        <div class="custom-file"  {...getRootProps()}>
  <input type="file" class="custom-file-input" id="customFile" {...getInputProps()}/>>
  <label class="custom-file-label">{this.state.fieldName || 'upload photo'}</label>
</div>      
   
  )}
</Dropzone>


                        </div>
                        <div className="col-md-6 col-lg-6">



                            {
                                this.state.files[0] && (
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Cropper
                                                style={{ height: 200, width: '100%' }}
                                                ref='cropper'
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
                                            <div className="btn-group btn-group-sm" role="group" >
                                                <button type="button"
                                                    class="btn btn-secondary"
                                                    onClick={() => { this.loadImages() }}
                                                >Add</button>

                                                <button
                                                    onClick={() => { this.cancelCrop() }}
                                                    type="button" class="btn btn-secondary">Cancel</button>
                                                <button
                                                    onClick={() => { this.uploadPhotos() }}
                                                    type="button" class="btn btn-danger">Upload All</button>
                                            </div>
                                        </div>
                                    </div>
                                )


                            }





                        </div>


                    </div>

                    {this.state.filesCropped.length > 0 && <h4>New Images</h4>}

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            margin: '20px'
                        }}

                    >

                        {

                            this.state.filesCropped && this.state.filesCropped.map((image) => {

                                return (

                                    <div>

                                        <i
                                            className="ni ni-fat-remove"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '30px',
                                                color: 'red'
                                            }}
                                            onClick={() => { this.removeImg(image.tempurl) }}
                                        >

                                        </i>

                                        <br />
                                        <img style={{ height: '150', width: '150px' , objectFit : 'cover' }} src={image.tempurl} alt="Card image cap" />
                                    </div>






                                )
                            })


                        }

                    </div>
                </div>

                <div

                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        margin: '20px'
                    }}
                >

                    {


                        this.renderUploadedImages()

                    }

                </div>



            </Fragment >
        )
    }
}






const mapDispatchToProps = {
    deleteOriginalImg,
    sendImages
}




export default connect(null, mapDispatchToProps)(ProductPhotos);