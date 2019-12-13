/**
 * ExperienceListItem.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ({
    id, title, description, experience_keywords, onClick
}) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">{ `${ title }` } </div>
            <div className="list-item__data"> { `Description: ${ description }` } </div>
            <div className="list-item__data"> { `Keywords: ${ experience_keywords }` }</div>
        </div>
        <button className="list-item__button">
            <Link to={ `/experience/${ id }` }
                  className="link--text">Edit
            </Link>
        </button>
        <button
            className="list-item__button"
            value={ id }
            onClick={ e => onClick(e.target.value) }>Remove
        </button>
    </div>
);
export default ExperienceListItem;
