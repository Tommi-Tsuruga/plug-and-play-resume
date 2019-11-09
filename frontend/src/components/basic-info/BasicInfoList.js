import React from "react";
import {connect} from "react-redux";
import BasicInfoListItem from "./BasicInfoListItem";

const BasicInfoList = (props) => {
    return (
        <div className="section">
            <h3 className="list-header">BasicInfo</h3>
            <div className="container">
                <div className="list-body">
                    {props.basicInfo.map((info) => {
                        return <BasicInfoListItem
                            key={info.id}
                            {...info} />
                    })}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo.basicInfo
});

export default connect(mapStateToProps)(BasicInfoList)
