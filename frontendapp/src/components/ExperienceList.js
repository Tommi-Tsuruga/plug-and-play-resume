/**
 * ExperienceList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import {connect} from 'react-redux';
import ExperienceListItem from './ExperienceListItem';
import {fetchExperiences} from "../actions/experiences";

export class ExperienceList extends React.Component {

    render = () => (
        <div className="add-experience">
            <h3 className="list-header">Your Experiences</h3>
            <div className="container">
                <div className="list-body">
                    {this.props.experiences.map((experience) => {
                        return <ExperienceListItem
                            key={experience.id} {...experience} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default connect((state) => ({
    experiences: state.experiences
}))(ExperienceList);
