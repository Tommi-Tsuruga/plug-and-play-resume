import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExperience } from "../../actions/experience";

export class Sections extends Component {
  static propTypes = {
    experience: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getExperience();
  }
  render() {
    return (
      <div>
        <h1>Resume Sections</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.resumeReducer.experience
});

export default connect(
  mapStateToProps,
  { getExperience }
)(Sections);
