/**
 * Header.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <div className="container">
        <header className="header">
            <div className="container">
                <div className="header__title">
                    <div className="header__title__text">
                        <h1>PlugAndPlayResume</h1>
                    </div>
                    <button className="header__title__button"
                            onClick={ startLogout }>Logout
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="header__content">
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
                </div>
            </div>
        </header>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

