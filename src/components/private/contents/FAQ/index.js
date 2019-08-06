import React, { Component, Fragment } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink, Switch, Route } from 'react-router-dom'
import { Divider } from '@material-ui/core'
import Create from './create'
import Lists from './lists'



class index extends Component {





    render() {







        return (
            <Fragment>

                <div className="container">
                    <h2 className="text-center display-4 my-2 py-2">FAQ</h2>

                    <Divider />
                    <div className="my-2 py-2">

                        <Nav pills>
                            <li className="nav-item">
                                <NavLink
                                    to="/admin/contents/faqs/create"
                                    className="nav-link"
                                >
                                    Create FAQ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/admin/contents/faqs"
                                    className="nav-link"
                                >
                                    FAQ Lists
                                </NavLink>
                            </li>


                        </Nav>
                    </div>


                    <Switch>

                        <Route exact path="/admin/contents/faqs" component={Lists} />
                        <Route exact path="/admin/contents/faqs/create" component={Create} />


                    </Switch>


                </div>


            </Fragment>
        )
    }
}



export default index;