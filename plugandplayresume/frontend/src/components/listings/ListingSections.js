import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getListing, deleteListing } from '../../actions/listing';

export class ListingSections extends Component {
  static propTypes = {
    listingInfo: PropTypes.array.isRequired,
    getListing: PropTypes.func.isRequired
    // ,
    // deleteListing: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getListing();
  }
  render() {
    return (
      <Fragment>
        <h2>Listing Sections</h2>
        {/* {
          (console.log('exp info', this.props.experience),
          console.log('basic info', this.props.Listing))
        } */}
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Listing ID</th>
              <th>Listing Title</th>
              <th>Listing</th>
              <th>Listing Keywords</th>
            </tr>
          </thead>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listingInfo: state.listingReducer.listing
});

export default connect(
  mapStateToProps,
  { getListing }
)(ListingSections);
