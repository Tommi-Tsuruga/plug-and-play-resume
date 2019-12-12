import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchListing } from "../actions/listings"
import ListingSections from './listings/ListingSections';
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
            <>
                <AddListing/>
                <ListingSections/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    listingInfo: state.listingInfo.listingInfo
});

export default connect(mapStateToProps)(ListingPage);
