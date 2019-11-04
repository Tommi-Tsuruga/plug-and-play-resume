/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import ExperienceListItem from './ExperienceListItem';

const ExperienceList = (props) => (
    <div className="add-experience">
        <h3 className="list-header">Your Experiences</h3>
        <div className="container">
            <div className="list-body">
                {props.experiences.map((experience) => {
                    console.log("experience list called");
                    return <ExperienceListItem
                        key={experience.id} {...experience} />;
                })}
            </div>
        </div>
    </div>
);
const mapStateToProps = (state) => ({
    experiences: state.experiences
});


export default connect(mapStateToProps)(ExperienceList);
