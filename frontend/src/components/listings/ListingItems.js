import React from "react"

const ListingItems = ({ id, listingTitle, listing, listingKeywords, submitResume, removeResume, index }) => {
    return (
        <>
            { `${ index + 1 }. ${ listingTitle }` } <br/>
            { `Keywords: ${ listingKeywords }` } <br/>
            { `${ listing } ` } <br/>
            <button
                className="list-item__button"
                value={ id }
                onClick={ (e) => removeResume(e.target.value) }
            >Remove
            </button>
            <button
                className="list-item__button"
                value={ id }
                onClick={ (e) => submitResume(e.target.value) }
            >Generate
            </button> <br/>
        </>
    );
};

export default ListingItems;