/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux'
import EducationForm from "./EducationForm";
import {startAddEducation} from "../../actions/educations";

const AddEducation = (props) => (
    <div className="add-experience">
        <h3 className="list-header">Add Education</h3>
        <EducationForm
            buttonText="Add Education"
            onSubmit={education => {
                props.dispatch(startAddEducation(education));
            }}
        />
    </div>
);

export default connect()(AddEducation);
