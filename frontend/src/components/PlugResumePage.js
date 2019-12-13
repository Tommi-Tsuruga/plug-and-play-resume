/**
 * PlugResumePage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PlugResumePage = ({ user }) => {
    console.log(user);
    return (
        <div className="page-section">
            <Container py="5">
                <Container className="py-10 px-10">
                    <h3 align="center">Hi, { user.username }! </h3>
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