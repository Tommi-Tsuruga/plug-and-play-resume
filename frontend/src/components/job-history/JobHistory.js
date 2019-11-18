import React from "react";
import {connect} from 'react-redux';
import { addJobHistory } from "../../actions/experiences";

const JobHistory = (props) => (
    <div className="section">
        <h2 className="list-header">JobHistory</h2>
            buttonText="Add Experience"
            onSubmit={jobHistory => {
                console.log(jobHistory);
                props.dispatch(addJobHistory(jobHistory));
            }}
        />
    </div>
);

export default connect()(JobHistory);
