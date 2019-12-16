import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGenerated } from "../../actions/generated";
import { Container } from "react-bootstrap";
import GeneratedList from "./GeneratedList";

class ResumePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchGenerated());
    };

    render = () => (
        <Container>
            <div className="page-section">
                <h2> Generated Resume </h2>
                <GeneratedList/>
            </div>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(ResumePage);
