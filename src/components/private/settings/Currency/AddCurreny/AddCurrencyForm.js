import React, { Component } from 'react'
import { Table, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class AddCurrencyForm extends Component {




    render() {
        return (
            <div>

                <div class="form-group">

                    <Label for="exampleSelect">Select Currency</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>USD</option>
                        <option>EURO</option>
                        <option>MMK</option>

                    </Input>

                </div>
                <div class="form-group">

                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Rate" />

                </div>
                <button className="btn btn-sm btn-success my-4">
                    Add Currency Rate
                    </button>
            </div>

        )
    }
}


export default AddCurrencyForm;