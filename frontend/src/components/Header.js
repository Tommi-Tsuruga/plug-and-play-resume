/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
import { Container, Nav, Navbar } from "react-bootstrap";

const capitalize = (s) =>(
    typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1)
);

export const Header = ({ startLogout }) => (
    <>
        <Navbar expand="lg" bg="secondary" text="uppercase" fixed="top">
            <Container>
                <Link to="/"
                      className="navbar navbar-brand">
                    PlugAndPlayResume
                </Link>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    className="bg-primary rounded">
                    MENU <i className="fas fa-bars"> </i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        { [ "/profile", "/listing", "/resume" ].map(
                            (address, index) => (
                                <Nav.Item
                                    key={ index }
                                    className="mx-0 mx-lg-1">
                                    <Link
                                        to={ address }
                                        className="navbar nav-item
                                           py-3 px-0 nav-link px-lg-3 rounded">
                                        { capitalize(address.substr(1)) }
                                    </Link>
                                </Nav.Item>
                            )) }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

