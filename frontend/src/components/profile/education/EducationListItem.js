/**
 * EductionListItems.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from 'react';
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

const EducationListItem = ({
    id, school_name, start_date, end_date,
    degree, major, onClick
}) => (
    <ListGroupItem>
        <b>{ school_name }</b> { `(${ start_date } - ${ end_date })` } <br/>
        { `${ degree } in ${ major }` } <br/>
        <ButtonGroup size="sm" className="btn-full">
            <LinkContainer to={ `/education/${ id }` }>
                <Button variant="secondary">
                    Edit</Button>
            </LinkContainer>
            <Button
                variant="danger"
                value={ id }
                onClick={ (e) => onClick(e.target.value) }>Remove
            </Button>
        </ButtonGroup>
    </ListGroupItem>
);

export default EducationListItem;