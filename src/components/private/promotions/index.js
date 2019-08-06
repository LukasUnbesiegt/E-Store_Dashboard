import React, { Component } from 'react'
import HeaderBar from '../../styles/HeaderBar'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Authenticated from '../../misc/auth/Authenticated'
import Table from './PromotionsTable/PromotionsTable'

import { getPromotions } from '../../../actions/adminActions'
import AddPromotions from './AddPromotions/AddPromotions'
import PromotionsSettings from './PromotionsSettings/PromotionSettings'



class Promotions extends Component {



    componentDidMount = () => {


        this.props.getPromotions()


    }



    render() {



        return (

            <div>
                <HeaderBar
                    title="Promotions"
                    sectionTitle="Promotions"
                    quantity={this.props.promotions ? this.props.promotions.totalItems : 0}
                    iconStyle="fa fa-bullhorn"
                    cat="Manage Promotions"
                    linkAdd="/admin/promotions/add"
                    linkTable="/admin/promotions/"
                    linkSetting="/admin/promotions/settings"
                />

                <div className="container-fluid pt-3 mt-3">
                    <div className="row">

                        <div className="col-12">

                            <Switch>
                                <Route exact path="/admin/promotions/" render={() => <Table promotions={this.props.promotions} />} />
                                <Route path="/admin/promotions/add/" component={AddPromotions} />
                                <Route path="/admin/promotions/settings/" component={PromotionsSettings} />
                            </Switch>


                        </div>



                    </div>




                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    promotions: state.admin.promotions
})

const mapDispatchToProps = {
    getPromotions
}


export default connect(mapStateToProps, mapDispatchToProps)(Authenticated(Promotions));