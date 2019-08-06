
import React, { Component } from 'react'






class index extends Component {




    renderSlidersList = () => {

        const { sliders } = this.props;


        if (sliders && sliders.length > 0) {


            return sliders.map((slider) => {


                return (
                    <div className="col-md-4 col-lg-4">
                        <div className="card my-2 py-2 mx-2 shadow" style={{ width: `18rem` }}>
                            <img src={slider.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{slider.name}</p>
                            </div>
                            <div class="card-footer text-muted">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button class="btn btn-icon btn-2 btn-outline-dark btn-sm" type="button">
                                        <span class="btn-inner--icon"><i class="ni ni-settings"></i></span>

                                    </button>
                                    <button

                                        class="btn btn-icon btn-2 btn-outline-dark btn-sm" type="button"
                                        onClick={() => { this.props.deleteSlider(slider.id, this.props.siteContentId) }}

                                    >
                                        <span class="btn-inner--icon"><i class="ni ni-basket"></i></span>

                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>

                )

            })


        } else {

            return (
                <h3>No Sliders for now</h3>
            )
        }

    }




    render() {








        return (
            <div className="row">
                {this.renderSlidersList()}
            </div>
        )
    }
}



export default index;