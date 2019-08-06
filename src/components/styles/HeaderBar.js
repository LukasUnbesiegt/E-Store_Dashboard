
import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'



const HeaderBar = styled.div`

background-color: ${(props) => props.bgcolor};
margin : '0';

h4 {
    padding-bottom : 4px;
    text-align : center;
    border-bottom : 1px solid black;
    
 
}

`



function headerBar(props) {




    return (
        <div>
            <HeaderBar>
                <h4>{props.title}</h4>
            </HeaderBar>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card card-common">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <i
                                        className={`${props.iconStyle} fa-3x`}
                                        style={{
                                            color: `#f6d365`

                                        }}

                                    ></i>
                                    <div className="text-right text-secondary">
                                        <h5>{props.sectionTitle}</h5>
                                        <h3>{props.quantity}</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card card-common">
                            <div className="card-body">

                                <div className="btn-group" role="group" aria-label="">
                                    <NavLink className="btn " to={props.linkAdd}
                                        style={{
                                            backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                            color: 'white'
                                        }}
                                    >
                                        {
                                            props.title}
                                    </NavLink>
                                    <NavLink className="btn " to={props.linkTable}
                                        style={{
                                            backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                            color: 'white'
                                        }}
                                    >Table</NavLink>
                                    {
                                        props.linkSetting ? (
                                            <NavLink className="btn"
                                                to={props.linkSetting}
                                                style={{
                                                    backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                                    color: 'white'
                                                }}
                                            >Settings</NavLink>) : null
                                    }


                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}



export default headerBar;