/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <>
                        <h1>PlugAndPlayResume</h1>

                    <button className="header__title__button"
                            onClick={ startLogout }>Logout
                    </button>
                    <NavLink to="/"
                             className="header__item"
                             activeClassName="is-active"
                             exact={ true }>
                        { <h2>Home</h2> }
                    </NavLink>
                    <NavLink to="/profile"
                             className="header__item"
                             activeClassName="is-active">
                        { <h2>Profile</h2> }
                    </NavLink>
                    <NavLink to="/listing"
                             className="header__item"
                             activeClassName="is-active">
                        { <h2>Listing</h2> }
                    </NavLink>
                    <NavLink to="/resume"
                             className="header__item"
                             activeClassName="is-active">
                        { <h2>Resume</h2> }
                    </NavLink>
    </>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

