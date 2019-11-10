import React from "react"
import {connect} from 'react-redux';
import {addResume} from "../../actions/listings";

const ListingItems = ({id, listingTitle, listing, listingKeywords, ...props}) => {
    return (
        <div className="list-item">
            <div className="list-item__text">
                <div className="list-item__title">
                    {`${id}. ${listingTitle}`}
                </div>
                <div className="list-item__data">
                    {`Keywords: ${listingKeywords}`}
                </div>
                <div className="list-item__data">
                    {`${listing} `}
                </div>
            </div>
            <button
                className="list-item__button"
                onClick={props.submitResume}
            >Generate Resume
            </button>
        </div>
    );
};


export default connect()(ListingItems);