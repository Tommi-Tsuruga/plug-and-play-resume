/**
 * AddExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from "./ExperienceForm";
import {addExperience} from "../actions/experiences";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

export class AddExperiencePage extends React.Component {
    onSubmit = (experience) => {
    this.props.dispatch(addExperience(experience));
    this.props.history.push('/');
  };
    render(){
        return(
            <div className="add-experience">
                <h3 className="list-header">Add Experience</h3>
                <ExperienceForm
                    buttonText="Add Experience"
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default connect()(AddExperiencePage);
