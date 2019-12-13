/**
 * ProfilePage.jsjs@author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import BasicInfo from "./basic-info/BasicInfo";
import AddExperience from "./experience/AddExperience";
import ExperienceList from "./experience/ExperienceList";
import AddEducation from "./education/AddEducation"
import EducationList from "./education/EducationList"
import { fetchExperiences } from "../actions/experiences";
import { fetchEducations } from "../actions/educations";
import { fetchBasicInfo } from "../actions/basicInfo";
import { fetchJobHistory } from "../actions/jobHistories";
import AddJobHistory from "./job-history/AddJobHistory";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBasicInfo());
        dispatch(fetchExperiences());
        dispatch(fetchEducations());
        dispatch(fetchJobHistory())
    };

    render() {
        return (
            <div className="container">
                <div className="container">
                    <BasicInfo
                        onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                </div>
                <div className="container">
                    <AddJobHistory
                        onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                </div>
                <div className="container">
                    <AddExperience
                        onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                </div>
                <div className="container">
                    <AddEducation
                        onSubmit={ () => {
                            this.props.history.push('/profile')
                        } }/>
                </div>
            </div>
        )
    }
}

export default connect()(ProfilePage);
