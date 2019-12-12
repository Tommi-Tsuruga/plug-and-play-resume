import React from 'react';
import { connect } from "react-redux";
import { editJobHistory } from "../../actions/jobHistories";
import JobHistoryForm from "./JobHistoryForm";
import JobHistoryList from "./JobHistoryList";

const EditJobHistoryPage = (props) => {
    return (<div>
            <h2 className="list-header">Edit jobHistory</h2>
            { console.log(props.jobHistory) }
            <JobHistoryForm
                buttonText="Submit"
                jobHistory={ props.jobHistory }
                onSubmit={ jobHistory => {
                    props.dispatch(
                        editJobHistory(props.jobHistory.id, jobHistory));
                } }
            />
            <JobHistoryList/>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    jobHistories: state.jobHistories.jobHistories,
    jobHistory: state.jobHistories.jobHistories.find(jobHistory =>
                                                         jobHistory.id === parseInt(
                                                         props.match.params.id)
    )
});

export default connect(mapStateToProps)(EditJobHistoryPage)