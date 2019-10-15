/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
        <div className="container">
            <header className="header">
                <h1 className="header__title">PlugAndPlayResume</h1>
                <div className="header__content">
                    <NavLink to="/"
                             className="header__item"
                             activeClassName="is-active"
                             exact={true}>
                        {<h2>Home</h2>}
                    </NavLink>
                    <NavLink to="/experience"
                             className="header__item"
                             activeClassName="is-active">
                        {<h2>Experience</h2>}
                    </NavLink>
                    <NavLink to="/login"
                             className="header__item"
                             activeClassName="is-active">
                        {<h2> Login</h2>}
                    </NavLink>
                    <NavLink to="/help"
                             className="header__item"
                             activeClassName="is-active">
                        {<h2>Help</h2>}
                    </NavLink>
                </div>
            </header>
        </div>
    )
;

export default Header;