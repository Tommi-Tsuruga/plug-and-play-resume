/**
 * ExperiencePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux';
import ExperienceForm from './ExperienceForm';
import {addExperience, fetchExperiences} from "../actions/experiences";
import ExperienceList from "./ExperienceList";
import {AddExperiencePage} from "./AddExperiencePage";

export class ExperiencePage extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="page-header__title">Experience</h2>
                </div>
                <div className="container">
                    <AddExperiencePage/>
                </div>
                <div className="container">
                    <ExperienceList/>
                </div>
            </div>
        )
    }
}


export default connect()

(
    ExperiencePage
)
;