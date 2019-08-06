import React, { Component, Fragment } from 'react'

class FAQ extends Component {



    render() {
        return (
            <Fragment>
                <h3 className="display-4 text-center">
                    Add Frequently Ask Questions
                </h3>

                <div className="">



                    <div>


                        <div class="form-group">

                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Question" />

                        </div>
                        <div class="form-group">

                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Answer" />

                        </div>

                        <button className="btn btn-sm btn-block btn-success my-4">
                            Add FAQ
    </button>
                    </div>




                </div>

                <div className="container">

                    <div className=" text-center">

                        <h4 className="">Total FAQs : 8 </h4>

                    </div>

                </div>

            </Fragment >
        )
    }
}




export default FAQ;