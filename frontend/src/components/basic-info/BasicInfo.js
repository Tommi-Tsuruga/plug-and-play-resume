/**
 * BasicInfo.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux'
import BasicInfoForm from "./BasicInfoForm";
import {UpdateBasicInfo} from "../../actions/basicInfo";

const BasicInfo = (props) => (
    <div className="add-experience">
        <h3 className="list-header">Basic Info</h3>
        <BasicInfoForm
            onSubmit={basicInfo => {
                console.log(BasicInfo);
                props.dispatch((UpdateBasicInfo(basicInfo)));
            }}
            basicInfo={props.basicInfo}
        />
    </div>
);


const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo.basicInfo
});

export default connect(mapStateToProps)(BasicInfo);