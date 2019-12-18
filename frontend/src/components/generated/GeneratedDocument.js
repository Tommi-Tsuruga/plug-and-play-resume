import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

import { styles } from "./GeneratedStyle"

export const GeneratedDocument = ({ generatedInfo }) => {
    return (
        <Document>
            <Page size="A4" style={ styles.page }>
                <View style={ styles.name_section}>
                <Text style={ styles.name }>
                    {`${generatedInfo.first_name} ${generatedInfo.last_name}`}
                </Text>
                <Text style={ styles.email }>{ generatedInfo.email }</Text>
                </View>
                <View style={ styles.section }>
                    <Text style={ styles.title }> Education: </Text>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.education1 }</Text>
                    </View>
                    <Text style={ styles.title }>Job History: </Text>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.relevantJobHistory1 }</Text>
                    </View>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.relevantJobHistory2 }</Text>
                    </View>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text}>{ generatedInfo.relevantJobHistory3 }</Text>
                    </View>
                    <Text style={ styles.title}>Experience:</Text>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.relevantExperience1 }</Text>
                    </View>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.relevantExperience2 }</Text>
                    </View>
                    <View style={ styles.section_item }>
                        <Text style={ styles.text }>{ generatedInfo.relevantExperience3 }</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
};
