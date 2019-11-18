/**
 * BasicInfo.jso.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from 'react-redux'
import BasicInfoForm from "./BasicInfoForm";
import { updateBasicInfo } from "../../actions/basicInfo";
import BasicInfoItem from "./BasicInfoItem";
import basicInfo from "../../reducers/basicInfo";

const BasicInfo = (props) => {
    return (
        <div className="section">
            <h2 className="list-header">Basic Info</h2>
            <BasicInfoForm
                onSubmit={ basicInfo => {
                    console.log(basicInfo);
                    props.dispatch((updateBasicInfo(basicInfo)));
                } }
            />
            <BasicInfoItem/>
        </div>
    )
};


export default connect()(BasicInfo);