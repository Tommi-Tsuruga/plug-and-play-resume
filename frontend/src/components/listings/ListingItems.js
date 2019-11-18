import React from "react"

const ListingItems = ({ id, listingTitle, listing, listingKeywords, submitResume, removeResume, index }) => {
    return (
        <div className="list-item">
            <div className="list-item__text">
                <div className="list-item__title">
                    { `${ index+1 }. ${ listingTitle }` }
                </div>
                <div className="list-item__data">
                    { `Keywords: ${ listingKeywords }` }
                </div>
                <div className="list-item__data">
                    { `${ listing } ` }
                </div>
            </div>
            <button
                className="list-item__button"
                value={ id }
                onClick={ (e) => removeResume(e.target.value)}
            >Remove
            </button>
            <button
                className="list-item__button"
                value={ id }
                onClick={ (e) => submitResume(e.target.value)}
            >Generate
            </button>
        </div>
    );
};

export default ListingItems;