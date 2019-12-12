/**
 * ProfilePage.jsjs@author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React, { Component } from "react";
import { connect } from 'react-redux';
import BasicInfo from "./basic-info/BasicInfo";
import AddExperience from "./experience/AddExperience";
import AddEducation from "./education/AddEducation"
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
            <>
                <BasicInfo
                    onSubmit={ () => {
                        this.props.history.push('/profile')
                    } }/>

                <AddJobHistory
                    onSubmit={ () => {
                        this.props.history.push('/profile')
                    } }/>
                <AddExperience
                    onSubmit={ () => {
                        this.props.history.push('/profile')
                    } }/>

                <AddEducation
                    onSubmit={ () => {
                        this.props.history.push('/profile')
                    } }/>
            </>
        )
    }
}

export default connect()(ProfilePage);
