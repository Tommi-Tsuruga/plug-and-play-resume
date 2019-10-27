/**
 * EditExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import {connect} from 'react-redux';
import ExperienceForm from './ExperienceForm';
import {
    editExperience,
    fetchExperiences,
    removeExperience
} from '../actions/experiences';

const EditExperiencePage = (props) => {
    return (
        <div className="container">
            <h3 className="list-header">Edit Experience</h3>
            <ExperienceForm
                experience={props.experience}
                buttonText={"Edit Experience"}
                onSubmit={(experience) => {
                    props.dispatch(editExperience(props.experience.id, experience));
                    props.history.push('/experience');
                }}
            />
            <button
                className="button--remove"
                onClick={() => {
                    props.dispatch(removeExperience({id: props.experience.id}));
                    props.history.push('/experience');
                }}>Remove From List
            </button>
        </div>

    );
};

const mapStateToProps = (state, props) => {
    return {
        experience: state.experiences.find((experience) => experience.id === props.match.params.id)
    };
};


export default connect(mapStateToProps)(EditExperiencePage);
