import React from "react";
import { connect } from "react-redux";

const BasicInfoItem = ({ basicInfo }) => {
    const { first_name, last_name, email } = basicInfo;
    return (
        <>
            { ` ${ first_name } ${ last_name } ` } <br/>
            { email } <br/>
        </>
    );
};

const mapStateToProps = (state) => ({
    basicInfo: state.basicInfo
});

export default connect(mapStateToProps)(BasicInfoItem);