import React from 'react';
import { connect } from "react-redux";
import { editJobHistory } from "../../actions/jobHistories";
import JobHistoryForm from "./JobHistoryForm";
import JobHistoryList from "./JobHistoryList";

const EditJobHistoryPage = (props) => {
    return (<div className="container">
            <div className="section">
                <h2 className="list-header">Edit Experience</h2>
                { console.log(props.jobHistories) }
                <JobHistoryForm
                    buttonText="Submit"
                    jobHisotry={ props.jobHistory }
                    onSubmit={ jobHistory => {
                        props.dispatch(
                            editJobHistory(props.jobHistory.id, jobHistory));
                    } }
                />
                <JobHistoryList/>
            </div>
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