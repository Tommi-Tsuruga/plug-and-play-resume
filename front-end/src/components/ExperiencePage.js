/**
 * ExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from 'react-redux';
import ExperienceForm from './ExperienceForm';
 import { addExperience } from "../actions/experiences";
import ExperienceList from "./ExperienceList";

const ExperiencePage = (props) => (
    <div>
        <h1>Experience</h1>

        <ExperienceForm
            onSubmit={(experience) => {
            props.dispatch(addExperience(experience));
            props.history.push('/experience');
            }}
        />
        <ExperienceList />
    </div>
);



export default connect()(ExperiencePage);