import React from "react"
import {connect} from "react-redux";

const ListingItems = ({id, listingTitle, listing, listingKeywords}) => {
    return (
        <div className="list-item">
            <div className="list-item__title">
                {`${id} ${listingTitle} ${listing} ${listingKeywords}`}
                <button
                    className="button--link"
                    onClick={this.props.onClick}/>
            </div>
        </div>
    );
};

export default ListingItems;