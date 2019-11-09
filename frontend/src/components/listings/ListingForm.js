import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addListing } from '../../actions/listings';
import moment from "moment";

export default class ListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: this.props.listings ? this.props.listings.listing : '',
            listingTitle: this.props.listings? this.props.listings.listingTitle : '',
            error: ''
        };
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {listing, listingTitle} = this.state;
        if (!(listing && listingTitle)) {
            this.setState(() => ({
                error: 'Please provide valid info for both fields'
            }));
        }
        // Modify this to take multiple exp fields
        const listInfo = {listing, listingTitle};
        this.props.onSubmit(listInfo);
    };

    render() {
        return (
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error &&
                    <p className="form-error">{this.state.error}</p>}
                    <input
                        className='text-input'
                        type='text'
                        placeholder="Listing Title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <textarea
                        className='textarea'
                        placeholder='listing'
                        onChange={this.onChange}
                        value={this.state.listings}
                    />
                    <button className='button--full'>Submit</button>
                </form>
            </div>
        );
    };
}