import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { closeModal } from '../modalActions'
import { connect } from 'react-redux'

import AccountKit from 'react-facebook-account-kit'
import { FB_APP_ID } from '../../../../config'


class AccountKitModal extends Component {


    accountKitLoginHandler = (resp) => {



    }


    render() {





        return (



            <div>

                <Modal isOpen={this.props.isOpen} className={this.props.className}>


                    <ModalBody>
                        <div
                            className="container"

                        >
                            <h5 className="display-5 text-center"> Enter your Customer Account</h5>


                            <AccountKit
                                appId={FB_APP_ID}
                                version="v1.1"
                                onResponse={(resp) => { this.accountKitLoginHandler(resp) }}
                                csrf={'yngWIE273929'}
                                countryCode={'+95'}
                                display={"modal"}
                            >
                                {p => <a className="nav-link"  {...p} > Shopper Login</a>}
                            </AccountKit>





                        </div>
                    </ModalBody>
                    <ModalFooter>

                        <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
    closeModal,


}



export default connect(null, mapDispatchToProps)(AccountKitModal);