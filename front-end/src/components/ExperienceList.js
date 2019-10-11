/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { connect } from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
import selectExperiences from '../selectors/experiences'

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
        experience: selectExperiences(state.experience, state.filters)
    };
};

export default connect(mapStateToProps)(ExperienceList);
