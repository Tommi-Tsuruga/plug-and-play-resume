import React from "react"
import { Button, ButtonGroup, ListGroupItem } from "react-bootstrap";

const ListingItems = ({ id, listingTitle, listing, listingKeywords, submitResume, removeResume, index }) => {
    return (
        <ListGroupItem>
            <h6>{ `${ index + 1 }. ${ listingTitle }` } </h6>
            { `Keywords: ${ listingKeywords }` } <br/>
            { `${ listing } ` } <br/>
            <ButtonGroup size="sm" className="btn-full">
            <Button
                variant="danger"
                value={ id }
                onClick={ (e) => removeResume(e.target.value) }
            >Remove
            </Button>
            <Button
                variant="info"
                value={ id }
                onClick={ (e) => submitResume(e.target.value) }
            >Generate
            </Button>
            </ButtonGroup>
        </ListGroupItem>
    );
};

export default ListingItems;