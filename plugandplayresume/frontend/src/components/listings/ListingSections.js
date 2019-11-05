import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getListing, deleteListing } from '../../actions/listing';

export class ListingSections extends Component {
  static propTypes = {
    listingInfo: PropTypes.array.isRequired,
    getListing: PropTypes.func.isRequired,
    deleteListing: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getListing();
  }
  render() {
    return (
      <Fragment>
        <h2>Listing Sections</h2>
        {console.log('listing info', this.props.listingInfo)}
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Listing ID</th>
              <th>Listing Title</th>
              <th>Listing</th>
              <th>Listing Keywords</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listingInfo.map(listingInfo => (
              <tr key={listingInfo.id}>
                <td>{listingInfo.id}</td>
                <td>{listingInfo.listingTitle}</td>
                <td>{listingInfo.listing}</td>
                {/* <td>{listingInfo.listingKeywords}</td> */}
                <td>
                  <button
                    onClick={this.props.deleteListing.bind(
                      this,
                      listingInfo.id
                    )}
                    className='btn btn-danger btn-sm'
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listingInfo: state.listingReducer.listingInfo
});

export default connect(
  mapStateToProps,
  { getListing, deleteListing }
)(ListingSections);
