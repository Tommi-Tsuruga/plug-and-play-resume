import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { getListing, deleteListing, addResume } from "../../actions/listing";

export class ListingSections extends Component {
  state = {
    listingID: ""
  };
  static propTypes = {
    listingInfo: PropTypes.array.isRequired,
    getListing: PropTypes.func.isRequired,
    deleteListing: PropTypes.func.isRequired,
    addResume: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getListing();
  }

  submitResume(i) {
    console.log("i in this submit function", i);
    this.props.addResume({ i });
  }
  onSubmit = e => {
    // e.preventDefault();
    // const { listingID } = this.state;
    // console.log('id in ls.js', listingID);
    // this.props.addResume({ listingID });
    // this.setState({
    //   listingID: ''
    // });
  };

  render() {
    const { listingID } = this.state;
    return (
      <Fragment>
        <h2>Listing Sections</h2>
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
                <td>{listingInfo.listingKeywords}</td>
                <td>
                  <button
                    onClick={this.submitResume.bind(this, listingInfo.id)}
                    className='btn btn-primary'
                  >
                    Gnerate
                  </button>
                  <Link to='/generated'>
                    <button className='btn btn-primary'>Resume</button>
                  </Link>
                  <button
                    onClick={this.props.deleteListing.bind(
                      this,
                      listingInfo.id
                    )}
                    className='btn btn-danger btn-sm'
                  >
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
  { getListing, deleteListing, addResume }
)(ListingSections);
