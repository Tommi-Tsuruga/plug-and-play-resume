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
            <div className="container">
                <h2 className="page-header__title">Experience</h2>
            </div>
            <div className="container">
                <div className="add-experience">
                    <h3 className="list-header">Add Experience</h3>
                    <ExperienceForm
                        buttonText="Add Experience"
                        onSubmit={(experience) => {
                            props.dispatch(addExperience(experience));
                            props.history.push('/experience');
                        }}
                    />
                </div>
                <ExperienceList/>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        experience: state.experience
    };
};
export default connect(mapStateToProps)(ExperiencePage);