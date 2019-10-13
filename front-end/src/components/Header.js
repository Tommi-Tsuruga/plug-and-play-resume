/**
 * Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>PlugAndPlayResume</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/experience"
                 activeClassName="is-active">Experience</NavLink>
        <NavLink to="/login" activeClassName="is-active"> Login</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
);

export default Header;