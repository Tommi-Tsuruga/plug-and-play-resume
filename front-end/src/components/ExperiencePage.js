/**
 * ExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from 'react-redux';
import ExperienceForm from './ExperienceForm';
import { addExperience } from "../actions/experiences";
import ExperienceList from "./ExperienceList";
import ExperienceListFilters from "./ExperienceListFilters";
import selectExperiences from "../selectors/experiences";

const ExperiencePage = (props) => (
    <div>
        <h1>Experience</h1>

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