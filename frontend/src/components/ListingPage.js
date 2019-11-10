import React, {Component} from 'react';
import {connect} from "react-redux";
import ListingForm from './listings/ListingForm';
import {addResume, fetchListing} from "../actions/listings"
import ListingSections from './listings/ListingSections';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import AddListing from "./listings/AddListing";

class ListingPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchListing());
    }

    render() {
        return (
                <div className="container">
                    <h2 className="page-header__title">Your Listing</h2>
                    <div className="container">
                        <AddListing/>
                    </div>
                    <div className="container">
                        <ListingSections/>
                    </div>
                </div>
        );
    }
}

export default connect()(ListingPage);
