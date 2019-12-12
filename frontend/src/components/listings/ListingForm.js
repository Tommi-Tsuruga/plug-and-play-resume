import React, { Component } from 'react';

export default class ListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingTitle: props.listingInfo ? props.listingInfo.listingTitle : '',
            listing: props.listingInfo ? props.listingInfo.listing : '',
            error: ''
        };
    }

    onTitleChange = (e) => {
        const listingTitle = e.target.value;
        this.setState(() => ({ listingTitle }));
    };
    onDetailChange = (e) => {
        const listing = e.target.value;
        this.setState(() => ({ listing }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { listing, listingTitle } = this.state;
        if (!(listing && listingTitle)) {
            this.setState(() => ({
                error: 'Please provide valid info for both fields'
            }));
        } else {
            // Modify this to take multiple exp fields
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                                    listingTitle: this.state.listingTitle,
                                    listing: this.state.listing
                                });
        }
    };

    render() {
        return (
            <>
                <form className="form" onSubmit={ this.onSubmit }>
                    { this.state.error &&
                    <p className="form-error">{ this.state.error }</p> }
                    <input
                        className='text-input'
                        type='text'
                        placeholder="Listing Title"
                        value={ this.state.listingTitle }
                        onChange={ this.onTitleChange }
                    />
                    <textarea
                        className='textarea'
                        placeholder='Listing Detail'
                        onChange={ this.onDetailChange }
                        value={ this.state.listing }
                    />
                    <button className='button--full'>Add Listing</button>
                </form>
            </>
        );
    };
}