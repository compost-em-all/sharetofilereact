import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import { Button } from "react-native";

const [selectedDocument, setSelectedDocument] = useState<DocumentPicker.DocumentPickerAsset>();

const pickDocument = async () => {
    try {
        const result = await DocumentPicker.getDocumentAsync();

        if (!result.canceled) {
            const successResult = result as DocumentPicker.DocumentPickerSuccessResult;

            setSelectedDocument(result.assets[0]);

            alert(selectedDocument?.name);
        } else {
            console.log("Document selection cancelled");
        }
    } catch (error) {
        console.log("Foo picking document:", error);
    }
}

export default function FilePicker() {
    return (
        <Button title="Select file" onPress={pickDocument}></Button>
    );
}