/**
 * BasicInfo.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {connect} from 'react-redux'
import BasicInfoForm from "./BasicInfoForm";
import {UpdateBasicInfo} from "../../actions/basicInfo";

const BasicInfo = (props) => (
    <div className="section">
        <h3 className="list-header">Basic Info</h3>
        <BasicInfoForm
            onSubmit={basicInfo => {
                props.dispatch((UpdateBasicInfo(basicInfo)));
            }}
        />
    </div>
);


export default connect()(BasicInfo);