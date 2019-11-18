/**
 * ProfilePage.jsjs@author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import AddExperience from "./experience/AddExperience";
import ExperienceList from "./experience/ExperienceList";
import AddEducation from "./education/AddEducation"
import EducationList from "./education/EducationList"
import { fetchExperiences } from "../actions/experiences";
import { fetchEducations } from "../actions/educations";
import { fetchBasicInfo } from "../actions/basicInfo";
import BasicInfo from "./basic-info/BasicInfo";


class ProfilePage extends Component {
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
                <div className="container">
                    <BasicInfo
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
