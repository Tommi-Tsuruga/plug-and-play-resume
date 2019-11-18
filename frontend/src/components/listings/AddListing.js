import React from 'react';
import { connect } from 'react-redux';
import ListingForm from "./ListingForm";
import { addListing } from '../../actions/listings';

const AddListing = (props) => (
    <div>
        <h2 className="list-header">Listing</h2>
        <ListingForm
            buttonText="Add"
            onSubmit={ (listing) => {
                props.dispatch(addListing(listing));
            } }
        />
    </div>
);

export default connect()(AddListing);