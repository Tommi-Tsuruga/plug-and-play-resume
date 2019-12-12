/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { Link } from "react-router-dom";

const EducationListItem = ({
    id, school_name, start_date, end_date,
    degree, major, onClick
}) => (
    <>
        { `${ school_name } (${ start_date } - ${ end_date })` } <br/>
        { `${ degree } in ${ major }` } <br/>
        <button className="list-item__button">
            <Link className="link--text" to={ `/education/${ id }` }>
                Edit</Link>
        </button>
        <button
            className="list-item__button"
            value={ id }
            onClick={ (e) => onClick(e.target.value) }>Remove
        </button>
        <br/>
    </>
);

export default EducationListItem;