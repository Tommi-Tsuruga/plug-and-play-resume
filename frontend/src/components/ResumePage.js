/**
 * ResumePage.js@author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import {fetchExperiences} from "../actions/experiences";
import {fetchEducations} from "../actions/educations";
import AddExperience from "./experience/AddExperience";
import ExperienceList from "./experience/ExperienceList";
import AddEducation from "./education/AddEducation"
import EducationList from "./education/EducationList"
import BasicInfoForm from "./basic-info/BasicInfoForm";
import BasicInfo from "./basic-info/BasicInfo";

export class ResumePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchExperiences());
        this.props.dispatch(fetchEducations());
    }

    render = () => (
        <div>
            <div className="container">
                <h2 className="page-header__title">Resume</h2>
                <div className="container">
                    <BasicInfo
                        onSubmit={() => {
                            this.props.history.push('/resume')
                        }}/>
                </div>
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

const mapStateToProps = (state) => ({
    experiences: state.experiences,
    educations: state.educations
});

export default connect(mapStateToProps)(ResumePage);