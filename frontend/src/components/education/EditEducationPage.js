/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from 'react-redux'
import EducationForm from "./EducationForm";
import { editEducation } from "../../actions/educations";

const EditEducationPage = (props) => (
    <div className="section">
        <h3 className="list-header"> </h3>
        { console.log(props) }
        <EducationForm
            buttonText="Submit"
            education={ props.education }
            onSubmit={ education => {
                props.dispatch(editEducation(props.match.params.id, education));
            } }
        />
    </div>
);

export default connect()(EditEducationPage);