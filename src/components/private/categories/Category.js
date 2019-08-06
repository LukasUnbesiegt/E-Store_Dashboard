import React, { Component } from 'react'
import AddCategory from '../categories/form/AddCategory'
import CategoriesList from './index'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link, Switch, Route } from 'react-router-dom'

class Category extends Component {







    render() {








        return (



            <div className="container">

                <div className="">
                    <Nav pills>
                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/categories">
                                    Categories
                          </Link>

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to="/admin/products/categories/add">
                                    Add Category
                         </Link>

                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>


                <Switch>
                    <Route
                        exact
                        path="/admin/products/categories"
                        render={() => <CategoriesList />}
                    />
                    <Route
                        path="/admin/products/categories/add"
                        render={() => <AddCategory />}
                    />
                </Switch>

            </div>
        )
    }
}





export default Category;