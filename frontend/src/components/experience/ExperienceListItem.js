/**
 * ExperienceListItem.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ({
    id, title, description, experience_keywords, onClick
}) => (
    <>
        { `${ title }` } <br/>
        { `Description: ${ description }` } <br/>
        { `Keywords: ${ experience_keywords }` } <br/>
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
        <br/>
    </>
);
export default ExperienceListItem;
