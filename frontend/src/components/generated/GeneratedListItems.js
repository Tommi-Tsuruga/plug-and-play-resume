import React from "react"
import { Button, ListGroupItem } from "react-bootstrap";
import { Document, Page, PDFDownloadLink, StyleSheet, Text, View }
    from '@react-pdf/renderer';
import { GeneratedDocument } from "./GeneratedDocument";


const GeneratedListItems = (generatedInfo) => (
    <ListGroupItem>
        <h3>{ generatedInfo.first_name } { generatedInfo.last_name }</h3>
        { generatedInfo.email }
        <h6>Education: </h6>
        <li> { `${ generatedInfo.education1 }` }</li>
        <li> { `${ generatedInfo.education2 }` }</li>

        <h6>Job History: </h6>
        <li>{ generatedInfo.relevantJobHistory1 }</li>
        <li>{ generatedInfo.relevantJobHistory2 }</li>
        <li>{ generatedInfo.relevantJobHistory3 }</li>

        <h6>Experience: </h6>
        <li>{ generatedInfo.relevantExperience1 }</li>
        <li>{ generatedInfo.relevantExperience2 }</li>
        <li>{ generatedInfo.relevantExperience3 }</li>
        <div className="btn btn-full">
             <PDFDownloadLink document={ <GeneratedDocument
                                            generatedInfo={ generatedInfo }/> }
                             fileName="resume.pdf">
                { ({ blob, url, loading, error }) => (loading ? 'Loading' +
                    ' document...' : 'Save as PDF') }
            </PDFDownloadLink>
        </div>
    </ListGroupItem>
);

export default GeneratedListItems;