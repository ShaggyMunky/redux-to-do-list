import React, {Component} from "react";
import {Link} from "react-router-dom";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {addItem} from "../actions"

class AddForm extends Component {
    renderInput(props){
        return(
            <div className="form-group">
                <label>{props.label}</label>
                <input {...props.input} type="text" className="form-control"/>
                <p className="text-danger">{props.meta.touched && props.meta.error}</p>
            </div>
        );
    }

    handleAddItem(values){
        console.log("Adding Item:", values);
        this.props.addItem(values).then(() => {
            console.log("Item added to server");
            this.props.history.push("/");
        });
    }

    render(){
        console.log("Add form Props:", this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
                <h1 className="text-center">Add To Do Item</h1>
                <div className="row justify-content-end">
                    <Link className="btn btn-outline-primary" to="">Go Back</Link>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Field name="title" label="Title" component={this.renderInput}/>
                        <Field name="details" label="Details" component={this.renderInput}/>
                        <div className="row">
                            <div className="col-12 d-flex flex-row-reverse">
                                <button className="btn btn-outline-success">Add Item</button>
                                <button onClick={this.props.reset} type="button" className="btn btn-outline-danger mr-3">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

function validateInput(values){
    const error = {};

    if(!values.title){
        error.title = "Please enter a title"
    }

    if (!values.details){
        error.details = "Please enter details"
    }
    return error;
}

AddForm = reduxForm({
    form: "Add-item-form",
    validate: validateInput
})(AddForm);

export default connect(null, {addItem})(AddForm);