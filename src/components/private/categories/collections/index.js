import React, { Component } from 'react'
import AddCollection from './form/AddCollection'
import { Link, Switch, Route } from 'react-router-dom'
import CollectionsList from './CollectionsList'
import { Nav, NavItem, NavLink } from 'reactstrap'



class Collections extends Component {


    render() {



        return (
            <div className="container">

                <div className="">
                    <Nav pills>
                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/collections">
                                    Collections
                              </Link>

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/collections/add">
                                    Add Collection
                             </Link>

                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>


                <Switch>
                    <Route
                        exact
                        path="/admin/products/collections"
                        render={() => <CollectionsList />}
                    />
                    <Route
                        path="/admin/products/collections/add"
                        render={() => <AddCollection />}
                    />
                </Switch>

            </div>
        )
    }
}



export default Collections;