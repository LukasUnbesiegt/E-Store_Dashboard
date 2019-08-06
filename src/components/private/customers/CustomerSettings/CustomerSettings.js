import React, { Component } from 'react'

import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link, Switch, Route } from 'react-router-dom'
import Enquiry from './Enquiry'


class CustomersSettings extends Component {






    render() {



        return (
            <div className="container-fluid">

                <div className="">
                    <Nav pills>
                        <NavItem>
                            <NavLink>
                                <Link to="/admin/customers/settings/">
                                    Enquiries
                          </Link>

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="/admin/customers/settings/">
                                    Others
                         </Link>

                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>


                <Switch>
                    <Route
                        exact
                        path="/admin/customers/settings/"
                        render={() => <Enquiry />}
                    />
                    <Route
                        path="/admin/customers/settings/"
                        render={() => <Enquiry />}
                    />
                </Switch>

            </div>
        )
    }
}



export default CustomersSettings;