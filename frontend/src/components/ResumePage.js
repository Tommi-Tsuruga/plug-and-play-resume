/**
 * ResumePage.js@author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import {startFetchExperiences} from "../actions/experiences";
import {startFetchEducations} from "../actions/educations";
import AddExperience from "./experience/AddExperience";
import ExperienceList from "./experience/ExperienceList";
import AddEducation from "./education/AddEducation"
import EducationList from "./education/EducationList"

export class ResumePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(startFetchExperiences());
        this.props.dispatch(startFetchEducations());
    }

    render = () => (
        <div>
            <div className="container">
                <h2 className="page-header__title">Resume</h2>

                <div className="container">
                    <AddExperience
                        onSubmit={() => {
                            this.props.history.push('/resume')
                        }}/>
                </div>
                <div className="container">
                    <ExperienceList/>
                </div>
                <div className="container">
                    <AddEducation
                        onSubmit={() => {
                            this.props.history.push('/resume')
                        }}/>
                </div>
                <div className="container">
                    <EducationList/>
                </div>
            </div>
        </div>
    );
}

export default connect()(ResumePage);