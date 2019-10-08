import React from "react";
import { connect } from 'react-redux';
import ExperienceForm from './ExperienceForm';
import { addExperience } from "../actions/experiences";
import ExperienceListFilters from "./ExperienceListFilters";
import ExperienceList from "./ExperienceList";

const ExperiencePage = (props) => (
    <div>
        <h1>Experience</h1>
        <ExperienceListFilters />
        <ExperienceList />
        <ExperienceForm
            onSubmit={(experience) => {
            props.dispatch(addExperience(experience));
            props.history.push('/experience');
            }}
        />
    </div>
);

export default connect()(ExperiencePage);