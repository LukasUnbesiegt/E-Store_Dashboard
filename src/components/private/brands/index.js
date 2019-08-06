
import React, { Component } from 'react'
import AddBrand from './form/AddBrand'
import BrandsList from './BrandsList'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link, Switch, Route } from 'react-router-dom'




class Brands extends Component {


    render() {



        return (
            <div className="container">

                <div className="">
                    <Nav pills>
                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/brands">
                                    Brands
                              </Link>

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/brands/add">
                                    Add Brand
                             </Link>

                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>


                <Switch>
                    <Route
                        exact
                        path="/admin/products/brands"
                        render={() => <BrandsList />}
                    />
                    <Route
                        path="/admin/products/brands/add"
                        render={() => <AddBrand />}
                    />
                </Switch>

            </div>
        )
    }
}



export default Brands;