import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from "./ExperienceForm";
import { addExperience } from "../../actions/experiences";
import ExperienceList from "./ExperienceList";

const AddExperience = (props) => (
    <>
        <h2 className="list-header">Experience</h2>
        <ExperienceForm
            buttonText="Add Experience"
            onSubmit={ experience => {
                console.log(experience);
                props.dispatch(addExperience(experience));
            } }
        />
        <ExperienceList/>
    </>
);

export default connect()(AddExperience);
