import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExperience, deleteExperience } from "../../actions/experience";

export class Sections extends Component {
  static propTypes = {
    experience: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getExperience();
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
              <th>Education</th>
              <th>Experience</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.experience.map(experience => (
              <tr key={experience.id}>
                <td>{experience.id}</td>
                <td>{experience.name}</td>
                <td>{experience.education}</td>
                <td>{experience.workExperience}</td>
                <td>
                  <button
                    onClick={this.props.deleteExperience.bind(
                      this,
                      experience.id
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.resumeReducer.experience
});

export default connect(
  mapStateToProps,
  { getExperience, deleteExperience }
)(Sections);
