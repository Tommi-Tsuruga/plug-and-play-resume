import React from "react";
import {connect} from 'react-redux';
import { addJobHistory } from "../../actions/jobHistories";
import JobHistoryForm from "./JobHistoryForm";
import JobHistoryList from "./JobHistoryList";

const AddJobHistory = (props) => (
    <div className="section">
        <h2 className="list-header">JobHistory</h2>
        <JobHistoryForm
            buttonText="Add JobHistory"
            onSubmit={jobHistory => {
                console.log(jobHistory);
                props.dispatch(addJobHistory(jobHistory));
            }}
        />
        <JobHistoryList/>
    </div>
);

export default connect()(AddJobHistory);
