/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux'
import EducationForm from "./EducationForm";
import {addEducation} from "../../actions/educations";

const AddEducation = (props) => (
    <div className="section">
        <h3 className="list-header">Add Education</h3>
        <EducationForm
            buttonText="Add Education"
            onSubmit={education => {
            props.dispatch(addEducation(education));
            }}
        />
    </div>
);

const mapStateToProps = (state) => ({
    educations: state.educations.educations
});

export default connect(mapStateToProps)(AddEducation);
