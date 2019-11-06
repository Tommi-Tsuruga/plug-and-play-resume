import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  getBasicInfo,
  deleteBasicInfo,
  getExperienceInfo
} from '../../actions/experience';

export class Sections extends Component {
  static propTypes = {
    basicInfo: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
    getBasicInfo: PropTypes.func.isRequired,
    deleteBasicInfo: PropTypes.func.isRequired,
    getExperienceInfo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBasicInfo();
    this.props.getExperienceInfo();
  }
  render() {
    return (
      <Fragment>
        <h2>Resume Sections</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Education</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.basicInfo.map(basicInfo => (
              <tr key={basicInfo.id}>
                <td>{basicInfo.id}</td>
                <td>{basicInfo.name}</td>
                <td>{basicInfo.email}</td>
                <td>{basicInfo.education}</td>
                <td>
                  <button
                    onClick={this.props.deleteBasicInfo.bind(
                      this,
                      basicInfo.id
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
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Exp ID</th>
              <th>Exp Title</th>
              <th>Experience</th>
              <th>Exp Keywords</th>
            </tr>
          </thead>
          <tbody>
            {this.props.experience.map(experience => (
              <tr key={experience.id}>
                <td>{experience.id}</td>
                <td>{experience.experienceTitle}</td>
                <td>{experience.experienceText}</td>
                <td>{experience.experienceKeywords}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  basicInfo: state.resumeReducer.basicInfo,
  experience: state.resumeReducer.experience
});

export default connect(
  mapStateToProps,
  { getBasicInfo, deleteBasicInfo, getExperienceInfo }
)(Sections);
