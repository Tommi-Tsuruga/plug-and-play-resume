/**
 * AddEducation.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import {connect} from 'react-redux'
import EducationForm from "./EducationForm";
import {addEducation} from "../../actions/educations";
import EducationList from "./EducationList";

const AddEducation = (props) => (
    <div className="section">
        <h2 className="list-header">Education</h2>
        <EducationForm
            buttonText="Add Education"
            onSubmit={education => {
            props.dispatch(addEducation(education));
            }}
        />
        <EducationList/>
    </div>
);

const mapStateToProps = (state) => ({
    educations: state.educations.educations
});

export default connect(mapStateToProps)(AddEducation);
