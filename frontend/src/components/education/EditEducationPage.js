/**
 * AddEducation.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import { connect } from 'react-redux'
import EducationForm from "./EducationForm";
import { editEducation } from "../../actions/educations";
import EducationList from "./EducationList";

const EditEducationPage = (props) => {
    return (
        <div className="container">
            <div className="section">
                <h2 className="list-header">Edit Education</h2>
                { console.log(props.education) }
                <EducationForm
                    buttonText="Submit"
                    education={props.education}
                    onSubmit={ education => {
                        props.dispatch(
                            editEducation(props.education.id, education));
                    }}
                />
                <EducationList/>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    educations: state.educations.educations,
    education: state.educations.educations.find(education =>
        education.id === parseInt(props.match.params.id))
});

export default connect(mapStateToProps)(EditEducationPage);