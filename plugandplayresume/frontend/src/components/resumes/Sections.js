import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  getBasicInfo,
  deleteBasicInfo,
  getExperienceInfo
} from "../../actions/experience";

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
        {console.log("eh?")}
        <h2>Resume Sections</h2>
        {
          (console.log("exp info", this.props.experience),
          console.log("basic info", this.props.basicInfo))
        }
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Education</th>
              <th>Work Experience</th>
              <th>Experience</th>
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
                <td>{basicInfo.workHistory}</td>
                {/* <td>{experience.experience}</td> */}
                <td>
                  <button
                    onClick={this.props.deleteBasicInfo.bind(
                      this,
                      basicInfo.id
                    )}
                    className='btn btn-danger btn-sm'
                  >
                    {" "}
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
              <th>Exp sections</th>
            </tr>
          </thead>
          <tbody>
            {this.props.experience.map(experience => (
              <tr key={experience.id}>
                <td>{experience.id}</td>
                <td>{experience.experience}</td>
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
