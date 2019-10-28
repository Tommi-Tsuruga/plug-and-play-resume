/**
 * AddExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from "./ExperienceForm";
import {startAddExperience} from "../actions/experiences";

export const AddExperiencePage = (props) => (
        <div className="add-experience">
            <h3 className="list-header">Add Experience</h3>
            <ExperienceForm
                buttonText="Add Experience"
                onSubmit={(experience) => {
                    props.dispatch(startAddExperience(experience));
                    props.history.push('/experience');
                }}
            />
        </div>
    );

export default connect()(AddExperiencePage);
