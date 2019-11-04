/**
 * AddExperience.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from "./ExperienceForm";
import {startAddExperience} from "../../actions/experiences";

const AddExperience = (props) => (
    <div className="add-experience">
        <h3 className="list-header">Add Experience</h3>
        <ExperienceForm
            buttonText="Add Experience"
            onSubmit={experience => {
                props.dispatch(startAddExperience(experience));
            }}
        />
    </div>
);

export default connect()(AddExperience);
