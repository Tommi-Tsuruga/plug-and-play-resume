import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addListing } from '../../actions/listing';

export class ListingForm extends Component {
  state = {
    listing: '',
    listingTitle: ''
  };

  static propTypes = {
    addListing: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { listing, listingTitle } = this.state;
    // Modify this to take multiple exp fields
    const listInfo = { listing, listingTitle };
    this.props.addListing(listInfo);
    this.setState({
      listing: '',
      listingTitle: ''
    });
  };

  // Add some type of reactive listing field
  //(one of the ones that you can click a plus next to to add a new one  something)
  // each plus will fire off an axios call to listing api to add to db
  render() {
    const { listing, listingTitle } = this.state;

    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Listing</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Listing Title</label>
            <input
              className='form-control'
              type='text'
              name='listingTitle'
              onChange={this.onChange}
              value={listingTitle}
            />
          </div>
          <div className='form-group'>
            <label>Listing</label>
            <textarea
              className='form-control'
              type='text'
              name='listing'
              onChange={this.onChange}
              value={listing}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addListing }
)(ListingForm);
