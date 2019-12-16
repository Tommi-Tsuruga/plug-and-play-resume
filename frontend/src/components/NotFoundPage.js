/**
 * NotFoundPage.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
    <div className="container">
        404 - <Link to="/">Go home</Link>
    </div>
);
export default NotFoundPage;
