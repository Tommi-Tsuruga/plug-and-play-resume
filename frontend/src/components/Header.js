/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'
import { Button, Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { capitalize, removeSlash } from "../lib";

const privateRoutes = [ "/profile", "/listing", "/resume" ];
const publicRoutes = [ "/register", "/login" ];

export const Header = ({ startLogout, isAuthenticated }) => {
    const routes = isAuthenticated ? privateRoutes : publicRoutes;
    return(
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
                        { routes.map((route, index) => (
                            <Nav.Item
                               key={ index }
                               className="mx-0 mx-lg-1">
                               <Link
                                  to={ route }
                                  className="navbar nav-item py-3 px-0
                                             nav-link px-lg-3 rounded">
                                  { capitalize(removeSlash(route)) }
                               </Link>
                               </Nav.Item>
                            )) }
                        { isAuthenticated &&
                            <Nav.Item
                                onClick={ startLogout }
                                className="mx-0 mx-lg-1 py-3 px-0
                                           nav-link px-lg-3 rounded">
                                Logout
                            </Nav.Item>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

