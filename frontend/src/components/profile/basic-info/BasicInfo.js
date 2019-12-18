/**
 * BasicInfo.jso.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
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