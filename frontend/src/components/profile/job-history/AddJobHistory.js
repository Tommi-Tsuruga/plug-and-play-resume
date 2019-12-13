import React from "react";
import {connect} from 'react-redux';
import { addJobHistory } from "../../../actions/jobHistories";
import JobHistoryForm from "./JobHistoryForm";
import JobHistoryList from "./JobHistoryList";

const AddJobHistory = (props) => (
    <>
        <h3>JobHistory</h3>
        <JobHistoryForm
            buttonText="Add JobHistory"
            onSubmit={jobHistory => {
                console.log(jobHistory);
                props.dispatch(addJobHistory(jobHistory));
            }}
        />
        <JobHistoryList/>
    </>
);

export default connect()(AddJobHistory);
