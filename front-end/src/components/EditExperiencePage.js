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
          props.history.push('/');
        }}
      />)
      <button onClick={() => {
        props.dispatch(removeExperience({ id: props.experience.id }));
        props.history.push('/');
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
