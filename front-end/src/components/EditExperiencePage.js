/**
 * EditExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import { connect } from 'react-redux';
import ExperienceForm from './ExperienceForm';
import { editExperience, removeExperience } from '../actions/experiences';

const EditExperiencePage = (props) => {
  return (
    <div>
      <ExperienceForm
        experience={props.experience}
        onSubmit={(experience) => {
          props.dispatch(editExperience(props.experience.id, experience));
          props.history.push('/experience');
        }}
      />)
      <button onClick={() => {
        props.dispatch(removeExperience({ id: props.experience.id }));
        props.history.push('/experience');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    experience: state.experience.find((experience) => experience.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExperiencePage);
