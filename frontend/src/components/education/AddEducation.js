/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux'
import EducationForm from "./EducationForm";
import {addEducation} from "../../actions/educations";

const AddEducation = (props) => (
    <div className="add-experience">
        <h3 className="list-header">Add Education</h3>
        <EducationForm
            buttonText="Add Education"
        onSubmit={education => {
            console.log(education);
            props.dispatch(addEducation(education));
            }}
        />
    </div>
);

const mapStateToProps = (state) => ({
    educations: state.educations.educations,
    education: state.educations.education
});

export default connect(mapStateToProps)(AddEducation);
