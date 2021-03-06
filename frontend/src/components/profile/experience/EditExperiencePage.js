/**
 * AddEducation.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from "react-redux";
import ExperienceForm from "./ExperienceForm";
import { editExperience } from "../../../actions/experiences";
import ExperienceList from "./ExperienceList";
import { Container } from "react-bootstrap";

const EditExperiencePage = (props) => {
    return (
        <Container>
            <h2 className="list-header">Edit Experience</h2>
            { console.log(props.experience) }
            <ExperienceForm
                buttonText="Submit"
                experience={ props.experience }
                onSubmit={ experience => {
                    props.dispatch(
                        editExperience(props.experience.id, experience));
                } }
            />
            <ExperienceList/>
        </Container>
    );
};

const mapStateToProps = (state, props) => ({
    experiences: state.experiences.experiences,
    experience: state.experiences.experiences.find(experience =>
                                                       experience.id === parseInt(
                                                       props.match.params.id)
    )
});

export default connect(mapStateToProps)(EditExperiencePage);