/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
import {fetchExperiences} from "../../actions/experiences";

const ExperienceList = (props) => (
    <div className="section">
        <h3 className="list-header">Your Experiences</h3>
        <div className="container">
            <div className="list-body">
                {props.experiences.map(experience => {
                    return <ExperienceListItem
                        key={experience.id} {...experience} />;
                })}
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    experiences: state.experiences.experiences
});

export default connect(mapStateToProps)(ExperienceList);
