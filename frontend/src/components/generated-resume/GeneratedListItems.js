import React from "react"


const GeneratedListItems = (generatedInfo) => (
    <div className="list-item">
        <div className="list-item__text">
            <div className="list-item__title">
                { `${ generatedInfo.first_name } ${ generatedInfo.last_name }` }
            </div>
            <div className="list-item__data">
                { generatedInfo.email }
                <h3>Education: </h3>
                <li> { `${ generatedInfo.education1 }` }</li>
                <li> { `${ generatedInfo.education2 }` }</li>

                <h3>RelevantExperience</h3>
                <li>{ generatedInfo.relevantExperience1 }</li>
                <li>{ generatedInfo.relevantExperience2 }</li>
                <li>{ generatedInfo.relevantExperience3 }</li>

                {/*<p> id : { generatedInfo.id }</p>*/ }
                {/*<p> listing id : { generatedInfo.listingID }</p>*/ }
            </div>
        </div>
    </div>
);

export default GeneratedListItems;