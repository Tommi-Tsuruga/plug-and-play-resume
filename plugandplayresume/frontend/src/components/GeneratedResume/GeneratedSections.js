import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getGenerated } from "../../actions/generated";

export class GeneratedSections extends Component {
  static propTypes = {
    generatedInfo: PropTypes.array.isRequired,

    getGenerated: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getGenerated();
    console.log("when is this called?");
  }

  render() {
    return (
      <Fragment>
        <center>
          <h3>Generated Resume</h3>
        </center>
        <br></br>
        {this.props.generatedInfo.map(generatedInfo => (
          <Fragment>
            <h2>Name: </h2>
            <p>{generatedInfo.name}</p>
            <br></br>
            <h2>Education: </h2>
            <br></br>
            <p>{generatedInfo.education}</p>
            <br></br>

            <h2>RelevantExperience:</h2>
            <br></br>

            <ul>
              <li>{generatedInfo.relevantExperience1}</li>
              <li>{generatedInfo.relevantExperience2}</li>
              <li>{generatedInfo.relevantExperience3}</li>
            </ul>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  generatedInfo: state.generatedReducer.generatedInfo
});

export default connect(
  mapStateToProps,
  { getGenerated }
)(GeneratedSections);
