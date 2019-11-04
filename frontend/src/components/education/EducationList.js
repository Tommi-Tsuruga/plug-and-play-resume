/**
 * EducationList.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react"
import {connect} from "react-redux"
import EducationListItem from "./EducationListItem"

const EducationList = (props) => (
        <div className="add-experience">
        <h3 className="list-header">Education</h3>
        <div className="container">
            <div className="list-body">
                {props.educations.map((education) => {
                    console.log("education list called");
                    return <EducationListItem
                        key={education.id} {...education} />;
                })}
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    educations: state.educations
});

export default connect(mapStateToProps)(EducationList);