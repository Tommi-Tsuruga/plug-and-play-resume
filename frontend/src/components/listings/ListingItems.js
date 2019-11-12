import React, { Component } from "react"

const ListingItems = ({id, listingTitle, listing, listingKeywords, submitResume }) =>{

    function onClick (e) {
        console.log(e.target.value);
        submitResume(e.target.value);
    }

    return (
            <div className="list-item">
                <div className="list-item__text">
                    <div className="list-item__title">
                        { `${ id }. ${ listingTitle }` }
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
                    value={id}
                    onClick={(id)=>{onClick(id)}}
                >Generate Resume
                </button>
            </div>
        );
    };

export default ListingItems;