
import React, { Fragment } from 'react'





export default function FromContact({ store }) {




    const renderAddress = () => {


        if (store && store.store && store.store.address.line1) {


            return (
                <div>
                    <span className="mr-1">
                        {store.store.address.line1 ? store.store.address.line1 : 'example street1'}.

                    </span>
                    <span className="mr-1">
                        {store.store.address.line2 ? store.store.address.line2 : 'example township1'}.

                    </span>
                    <span className="mr-1">
                        {store.store.address.country ? store.store.address.country : 'example country1'}.
                    </span>
                    <span className="mr-1">
                        {store.store.address.region ? store.store.address.region : 'example region1'}.
                    </span>


                </div>
            )


        } else {
            return (
                <div>
                    <span className="mr-1">
                        example street.
                        </span>
                    <span className="mr-1">
                        example township.
                        </span>
                    <span className="mr-1">
                        example country.
                        </span>
                    <span className="mr-1">
                        example region.
                        </span>
                </div>
            )
        }




    }



    const renderFrom = () => {

        if (store) {
            return (
                <Fragment>
                    <div className="d-flex">
                        <strong className="mr-2">From:</strong>   <h5 className=""> {store.store.name} {' '} <i className="fas fa-phone-square"></i> {store.store.phone}</h5>

                    </div>

                    <div className="d-flex">

                        {renderAddress()}

                    </div>
                </Fragment>

            )

        } else {
            return (
                <Fragment>
                    <div className="d-flex">
                        <strong className="mr-2">From:</strong>   <h5 className=""> {'Store name'} {' '} <i className="fas fa-phone-square"></i> {'phone'}</h5>

                    </div>
                    <div className="d-flex">

                        {renderAddress()}

                    </div>
                </Fragment>

            )

        }

    }


    return (



        <div className="my-2 py-2">

            {renderFrom()}

        </div>
    )
}
