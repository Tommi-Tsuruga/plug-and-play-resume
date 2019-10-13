/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import ExperienceListItem from './ExperienceListItem';

const ExperienceList = (props) => (
    <div>
        <h2>Your Experience</h2>
        {props.experience.map((experience) => {
            return <ExperienceListItem key={experience.id} {...experience} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        experience: state.experience
    };
};

export default connect(mapStateToProps)(ExperienceList);
