/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'

export const Header = ({startLogout}) => (
    <div className="container">
        <header className="header">
            <Link className="header__title" to="/">
                <h1 className="header__title">PlugAndPlayResume</h1>
            </Link>
            <button className="header__content" onClick={startLogout}>
                {<h2>Logout</h2>}
            </button>
            <div className="header__content">
                <NavLink to="/"
                         className="header__item"
                         activeClassName="is-active"
                         exact={true}>
                    {<h2>Home</h2>}
                </NavLink>
                <NavLink to="/resume"
                         className="header__item"
                         activeClassName="is-active">
                    {<h2>Resume</h2>}
                </NavLink>
                <NavLink to="/help"
                         className="header__item"
                         activeClassName="is-active">
                    {<h2>Help</h2>}
                </NavLink>
            </div>
        </header>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

