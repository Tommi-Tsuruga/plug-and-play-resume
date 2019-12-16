import React from 'react';
import { connect } from "react-redux";
import { editJobHistory } from "../../../actions/jobHistories";
import JobHistoryForm from "./JobHistoryForm";
import JobHistoryList from "./JobHistoryList";
import { Container } from "react-bootstrap";

const EditJobHistoryPage = (props) => {
    return (
        <Container>
            <h2>Edit JobHistory</h2>
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
        </Container>
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