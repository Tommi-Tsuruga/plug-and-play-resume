/**
 * SectionPage.jsjs@author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import BasicInfoList from "./basic-info/BasicInfoList";
import AddExperience from "./experience/AddExperience";
import ExperienceList from "./experience/ExperienceList";
import AddEducation from "./education/AddEducation"
import EducationList from "./education/EducationList"
import { fetchExperiences } from "../actions/experiences";
import { fetchEducations } from "../actions/educations";
import { fetchBasicInfo } from "../actions/basicInfo";
import BasicInfo from "./basic-info/BasicInfo";


class SectionPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBasicInfo());
        dispatch(fetchExperiences());
        dispatch(fetchEducations());
    };

    render() {
        return (
            <div className="container">
                <h2 className="page-header__title">Your Info</h2>
                <div className="container">
                    <BasicInfo
                        onSubmit={ () => {
                            this.props.history.push('/resume')
                        } }/>
                    <BasicInfoList/>
                </div>
                <div className="container">
                    <AddExperience
                        onSubmit={ () => {
                            this.props.history.push('/resume')
                        } }/>
                    <ExperienceList/>
                </div>
                <div className="container">
                    <AddEducation
                        onSubmit={ () => {
                            this.props.history.push('/resume')
                        } }/>
                    <EducationList/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(SectionPage);
