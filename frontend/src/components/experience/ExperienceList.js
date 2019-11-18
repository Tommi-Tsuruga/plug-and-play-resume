/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
import { removeExperience } from "../../actions/experiences";

const ExperienceList = (props) => (
        <div className="container">
            <div className="list-body">
                {props.experiences.map(experience => {
                    return <ExperienceListItem
                        onClick={ id => props.dispatch(
                            removeExperience(id))
                        }
                        key={experience.id}
                            {...experience}
                    />;
                })}
            </div>
        </div>
);

const mapStateToProps = (state) => ({
    experiences: state.experiences.experiences
});

export default connect(mapStateToProps)(ExperienceList);
