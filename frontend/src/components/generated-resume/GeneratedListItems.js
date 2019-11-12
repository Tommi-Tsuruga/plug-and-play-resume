import React from "react"


const GeneratedListItems = (generatedInfo) => (
    <div className="list-item">
        <div className="list-item__title">
            {`${generatedInfo.first_name} ${generatedInfo.last_name}`}
                <h2>Education: </h2>
                <li>{generatedInfo.education1}</li>
                <li>{generatedInfo.education2}</li>
            <>
                <h2>RelevantExperience</h2>

                <li>{generatedInfo.relevantExperience1}</li>
                <li>{generatedInfo.relevantExperience2}</li>
                <li>{generatedInfo.relevantExperience3}</li>
            </>
        </div>
    </div>
);

export default GeneratedListItems;