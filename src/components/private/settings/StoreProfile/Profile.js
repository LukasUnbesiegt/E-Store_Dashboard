import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


import Info from './BasicInfo/BasicInfo'
import BasicInfo from './BasicInfo/BasicInfo';
import Policies from './Policies/Policies'


class StoreProfile extends Component {



    state = {
        activeTab: '1'
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }



    render() {





        return (



            <div
                className="container"

            >

                <h4
                    className="text-center display-4 my-2 py-2"
                >   Store Settings</h4>
                <div>



                    <Nav tabs className="mx-2 px-3">
                        <NavItem

                        >
                            <NavLink
                                className={`${this.state.activeTab === '1' && 'active'}`}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Store Information
       </NavLink>
                        </NavItem>
                        <NavItem


                        >
                            <NavLink
                                className={`${this.state.activeTab === '2' && 'active'}`}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Policies
</NavLink>
                        </NavItem>




                    </Nav>





                    <TabContent activeTab={this.state.activeTab} className="my-2 py-2">
                        <TabPane tabId="1">
                            <BasicInfo />
                        </TabPane>
                        <TabPane tabId="2">
                            <Policies />
                        </TabPane>



                    </TabContent>


                </div>
            </div>
        )
    }
}




export default StoreProfile;