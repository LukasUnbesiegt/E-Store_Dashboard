
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Badge, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as BSNavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux'
import { openModal } from '../misc/modalManager/modalActions'
import { logoutUser, accountKitLogin } from '../../actions/userActions'
import AccountKit from '../../services/accountkit';
import { FB_APP_ID } from '../../config'




class Navigator extends Component {


    state = {
        isOpen: false,
        width: window.innerWidth
    };



    handleWidthChange = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleWidthChange)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWidthChange)
    }


    toggle = () => {


        if (this.state.width < 500) {
            this.setState({
                isOpen: !this.state.isOpen
            });

        }

    }
    accountKitLoginHandler = (resp) => {

        this.props.accountKitLogin(resp.code)

    }



    render() {

        const renderUserDropdown = () => {
            let AdminAccess;
            if (this.props.user) {
                AdminAccess = this.props.user.isEditor || this.props.user.isAdmin;
            }




            if (this.props.user && this.props.user.isAuth) {

                return (

                    <li className="nav-item dropdown hoverable">
                        <NavLink className="nav-link nav-link-icon" to="/" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ni ni-circle-08" style={{ fontSize: '20px' }}></i>
                            <span className="nav-link-inner--text d-lg-none">User</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                            <NavLink className="dropdown-item" to="/account/orders">Account</NavLink>

                            {
                                AdminAccess && (<NavLink className="dropdown-item" to="/admin/products">Admin Dashboard</NavLink>)
                            }


                            <div className="dropdown-divider"></div>
                            <button
                                className="dropdown-item"
                                onClick={() => { this.props.logoutUser() }}
                            >
                                LogOut
                            </button>
                        </div>
                    </li>

                )


            } else {
                return (

                    <li className="nav-item" onClick={this.toggle} >

                        <AccountKit
                            appId={FB_APP_ID}
                            version="v1.1"
                            onResponse={(resp) => { this.accountKitLoginHandler(resp) }}
                            csrf={'yngWIE273929'}
                            countryCode={'+95'}
                            display={"modal"}



                        >
                            {p => <button className="btn btn-success"  {...p} > Shopper Login</button>}
                        </AccountKit>

                    </li>
                )
            }


        }

        const renderNavLinks = () => {



            return (
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="/orders">Your Orders</a>
                  </li> */}
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/storeinfo">About Store
                    </NavLink>
                    </li> */}

                    {renderUserDropdown()}

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/carts">

                            <i className="fa fa-shopping-cart"
                                style={{
                                    fontSize: '24px',
                                    position: 'relative'
                                }}
                            >
                                <Badge
                                    color="light"
                                    style={{
                                        position: 'absolute',
                                        bottom: '5px',
                                        color: '#fff'

                                    }}
                                >
                                    {

                                        this.props.totalQuantity

                                    }
                                </Badge>
                            </i>
                        </NavLink>
                    </li>
                </ul>

            )

        }



        const renderCart = () => {

            if (this.props.browser.orientation === 'landscape') {

                return (
                    <a className="navbar-brand " style={{ color: '#fff' }} >
                        <i className="ni ni-shop m-2"></i>
                        EStore
                </a>
                )

            } else {
                return (<Fragment>
                    <NavLink className="nav-link" to="/carts" style={{ color: '#fff' }}>

                        <i className="fa fa-shopping-cart"
                            style={{
                                fontSize: '24px',
                                position: 'relative'
                            }}
                        >
                            <Badge
                                color="light"
                                style={{
                                    position: 'absolute',
                                    bottom: '5px',
                                    color: '#fff'

                                }}
                            >
                                {

                                    this.props.totalQuantity

                                }
                            </Badge>
                        </i>
                    </NavLink>
                    <NavLink className="navbar-brand" style={{ color: '#fff' }} to="/">
                        <i className="ni ni-shop m-2"></i>
                        EStore
                  </NavLink>

                </Fragment>)
            }

        }


        const renderNavigations = () => {





            return (

                <div className="container">


                    {renderCart()}
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/">
                                        <i className="ni ni-shop m-2"></i>

                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" onClick={this.toggle}>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {renderNavLinks()}

                    </Collapse>


                </div>



            )

        }




        return (


            <Navbar
                expand="md"
                style={{ backgroundImage: 'linear-gradient(to right,  #38f9d7 0%, #43e97b 100%)' }}
                dark

            >
                {renderNavigations()}
            </Navbar>



        )
    }
}




const mapStateToProps = (state) => {



    return {
        totalQuantity: state.products.cartItems ? state.products.cartItems.totalQuantity : null,
        browser: state.browser
    }






}

const mapDispatchToProps = {
    openModal,
    logoutUser,
    accountKitLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigator);