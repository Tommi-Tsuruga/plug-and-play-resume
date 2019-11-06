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
        <h1>Generated Resume</h1>
        <p>Name: </p>
        {console.log("???", this.props.generatedInfo)}
        {this.props.generatedInfo.map(generatedInfo => (
          <tr key={generatedInfo.id}>
            <td>{generatedInfo.id}</td>
            <td>{generatedInfo.name}</td>
            <td>{generatedInfo.education}</td>
            <td>{generatedInfo.relevantExperience1}</td>
          </tr>
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
