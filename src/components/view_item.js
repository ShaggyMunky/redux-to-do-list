import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getOneItem} from "../actions";

class ViewItem extends Component {

    componentDidMount(){
        this.props.getOneItem(this.props.match.params.id);
    }

    render(){
        console.log("YOUOUOUOU", this.props);
        return(
            <div>
                <h1 className="text-center">View Irem</h1>
                <div className="row justify-content-end">
                    <Link to="/" className="btn btn-outline-primary">Go Back</Link>
                </div>
                <p>ID: {this.props.match.params.id}</p>
                <h3>Title: {this.props.item.title}</h3>
                <h4>Details: {this.props.item.details}</h4>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        item: state.todo.single
    }
}

export default connect(mapStateToProps, {getOneItem})(ViewItem);