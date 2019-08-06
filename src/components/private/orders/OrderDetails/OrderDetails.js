import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, } from 'reactstrap';
import moment from 'moment'
import From from './FromContact'




class OrderDetails extends Component {





    renderVariants = (variants) => {

        let str = ``;
        for (const key in variants) {
            if (variants.hasOwnProperty(key)) {
                const element = variants[key];
                str += `${key} : ${element}   `
            }
        }

        return str;
        console.log(str);

    }





    render() {



        const renderTitle = () => {


            if (this.props.order) {



                return (
                    <div className="d-flex">
                             <strong  className="mr-2">To :</strong>   <h5 className="">{this.props.order.shippingAddress.name} {' '} <i className="fas fa-phone-square"></i> {this.props.order.shippingAddress.phone}</h5>
                     
                    </div>
                )



            }


        }


        const renderItemsDetail = () => {


            if (this.props.order) {

                const { items, totalPrice, totalQuantity } = this.props.order.cart;



                const renderItems = () => {


                    return items.map((item) => {


                 

                        return (
                            <ListGroupItem>
                                <ListGroupItemText>
                                    {item.product.name} | {'  '} quantity : {item.quantity}
                                </ListGroupItemText>
                                <ListGroupItemText>

                                    {this.renderVariants(item.variants)}
                                </ListGroupItemText>
                            </ListGroupItem>
                        )
                    })





                }



                return (

                    <Fragment>
                        <div
                            className="d-flex m-2"

                        >

                            <h5 className="mr-2">Total Price : {totalPrice} </h5>
                            <h5>Total Quantity : {totalQuantity} </h5>


                        </div>
                        {renderItems()}
                    </Fragment>

                )

            }
        }

        

        const renderShipping = () => {

            if (this.props.order) {


             
                let {localDelivery} = this.props.order;
                let momentDesiredDate = moment(this.props.order.desiredDate).format('YYYY MM DD')
                let momentOrderedDate = moment(this.props.order.orderedDate).format('YYYY MM DD')



                return (
                    <Fragment>

                        <h4
                        className="text-center mt-2"
                        >
                        Shipping Address
                        
                        </h4>
                        <Divider />

                        
                        <div
                            className="row container mt-3"
                        
                        >
        
                            <div className="col-md-4">
                                
                                <div className="d-flex">
                                <span style={{
                                fontWeight : 'bold'
                            }}>Country</span> : {this.props.order.shippingAddress.country}
                                
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Region</span>:  {this.props.order.shippingAddress.region} 
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Address</span> : {this.props.order.shippingAddress.line1 } {' '}   {this.props.order.shippingAddress.line2 } 
                            
                            </div>
                         

                        </div>



                        <div
                            className="row container mt-3"
                        
                        >
        
                            <div className="col-md-4">
                                
                                <div className="">
                                <span style={{
                                fontWeight : 'bold'
                            }}>Delivery township</span> : {'no delivery township'}
                                
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Delivery Town</span>: { 'no delivery town'}
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Delivery Price</span> : {'no delivery price'}
                            
                            </div>

                        </div>

                        
                        <div
                            className="row container mt-3"
                        
                        >

                        <div className="col-md-4">
                                
                                <div className="d-flex">
                                <span style={{
                                fontWeight : 'bold'
                            }}>Desired Date</span> : {momentDesiredDate}
                                
                                </div>
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Ordered Date</span>: {momentOrderedDate}
                            
                            </div>
                            <div className="col-md-4">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Status</span>: {this.props.order.status}
                            
                            </div>



                        </div>


                        

                    </Fragment>
                )





            }


        }


const renderPayments = () => {

   
        if( this.props.order ) {

            const {payment} = this.props.order;

            const renderTransact = () => {

                if(payment && payment.transactionData) {
                    return Object.keys(payment.transactionData).map((key) => {

                        return (<div>

                           {`${key} :  ${payment.transactionData[key]}`}
                        </div>)
                })

                }else {
                    return (<div>No data</div>)
                }

                   


            }


            return (
                <Fragment>
                        <h4
                            className="text-center mt-4"
                            >
                            Payment Details
                            
                            </h4>
                            <Divider />
    
    
                            <div className="row container m-3">
    
                                                <div className="col-md-6">
                                                <span style={{
                                fontWeight : 'bold'
                            }}>Type</span>: {payment.merchant ? payment.merchant.name : 'no name'} {`[${payment.type}]`}
                            
                                                        
                                                </div>
                                                <div className="col-md-6">
                                                <span style={{
                                fontWeight : 'bold'
                            }}>Service Type</span>: {payment.merchant ? payment.merchant.type : 'unknown'}
                            
                                                </div>
                                        
                            </div>
                           
                            <div className="text-center">
                            <span style={{
                                fontWeight : 'bold'
                            }}>Transaction Data</span>
                                       
                            </div>

                            <div className="row">
                            

                                        {renderTransact()}
                            
                            
                            </div>
    
                    
                </Fragment>
            )

        }


     

    
}




        return (
            <div
                className="container-fluid m-2"
            >

            
                <From
                store={this.props.store}
                
                />
                <Divider 
                
                
                />
                <div className="my-2 py-2">
                {renderTitle()}
                {renderItemsDetail()}
                {renderShipping()}
                {renderPayments()}

                </div>
              

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    order: state.admin.order ,
    store : state.site ? state.site.site : null
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps)(OrderDetails)