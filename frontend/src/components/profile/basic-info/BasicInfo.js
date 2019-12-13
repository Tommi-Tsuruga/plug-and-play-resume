/**
 * BasicInfo.jso.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { connect } from 'react-redux'
import BasicInfoForm from "./BasicInfoForm";
import { updateBasicInfo } from "../../../actions/basicInfo";
import basicInfo from "../../../reducers/basicInfo";

const BasicInfo = (props) => {
    return (
        <>
            <h3>Basic Info</h3>
            <BasicInfoForm
                onSubmit={ basicInfo => {
                    props.dispatch((updateBasicInfo(basicInfo)));
                }}
            />
        </>
    )
};


export default connect()(BasicInfo);