import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchGenerated} from "../actions/generated";
import GeneratedInfoList from "./generated-resume/GeneratedList";

class ResumePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchGenerated());
    };

    render() {
        return (
            <div className="container">
                <h2 className="page-header__title">Generated Resume</h2>
                <GeneratedInfoList/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(ResumePage);
