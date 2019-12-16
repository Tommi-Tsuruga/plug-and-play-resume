/**
 * PlugResumePage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBasicInfo } from "../actions/basicInfo";
import { fetchExperiences } from "../actions/experiences";
import { fetchEducations } from "../actions/educations";
import { fetchJobHistory } from "../actions/jobHistories";

class PlugResumePage extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchBasicInfo());
        dispatch(fetchExperiences());
        dispatch(fetchEducations());
        dispatch(fetchJobHistory());
    };

    render = () => (
        <div className="page-section">
            <Container>
                <Container className="py-10 px-10">
                    <h3 align="center">Hi, { this.props.user.username }! </h3>
                    <Link to="/profile">
                            <Button
                                size="lg"
                                variant="info"
                                className="my-5 btn-full">
                                Generate your resume now
                            </Button>
                    </Link>
                </Container>
            </Container>
        </div>
    )
};

const mapStateToProps = (state) => ({
    user: state.auth.user
});
export default connect(mapStateToProps)(PlugResumePage);