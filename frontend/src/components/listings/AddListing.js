import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListingForm from "./ListingForm";
import {addListing} from '../../actions/listings';

const AddListing = (props) => (
    <div className="section">
        <h3 className="list-header">Add Listing</h3>
            <ListingForm
                buttonText="Add"
                onSubmit={(listing) => {
                    props.dispatch(addListing(listing));
                }}
            />
        </div>
);

export default connect()(AddListing);