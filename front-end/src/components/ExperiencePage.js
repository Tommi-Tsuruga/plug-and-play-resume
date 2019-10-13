/**
 * ExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from './ExperienceForm';
import {addExperience} from "../actions/experiences";
import ExperienceList from "./ExperienceList";

const ExperiencePage = (props) => {
    return (
        <div>
            <h2>Experience</h2>
            <h3>Add Experience</h3>
            <ExperienceForm
                onSubmit={(experience) => {
                    props.dispatch(addExperience(experience));
                    props.history.push('/experience');
                }}
            />
            <ExperienceList/>
        </div>
    )
};
const mapStateToProps = (state, props) => {
    return {
        experience: state.experience
    };
};
export default connect(mapStateToProps)(ExperiencePage);