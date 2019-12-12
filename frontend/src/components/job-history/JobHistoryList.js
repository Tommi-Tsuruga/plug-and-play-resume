import React from 'react';
import { connect } from 'react-redux';
import JobHistoryListItems from './JobHisotryListItems';
import { removeJobHistory } from "../../actions/jobHistories";

const JobHistoryList = (props) => (
    <>
        { props.jobHistories.map(jobHistory => {
            return <JobHistoryListItems
                onClick={ id => props.dispatch(
                    removeJobHistory(id))
                }
                key={ jobHistory.id }
                { ...jobHistory }
            />;
        }) }
    </>
);

const mapStateToProps = (state) => ({
    jobHistories: state.jobHistories.jobHistories
});

export default connect(mapStateToProps)(JobHistoryList);