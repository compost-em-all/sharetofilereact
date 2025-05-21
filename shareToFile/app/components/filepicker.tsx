import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FilePicker() {
    const [selectedDocument, setSelectedDocument] = useState<DocumentPicker.DocumentPickerAsset>();

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true});
    
            if (!result.canceled) {
                const successResult = result as DocumentPicker.DocumentPickerSuccessResult;
                console.log(result);
                console.log(successResult);
    
                setSelectedDocument(result.assets[0]);
    
            } else {
                console.log("Document selection cancelled");
            }
        } catch (error) {
            console.log("Picking document:", error);
        }
    }

    return (
        <TouchableOpacity onPress={() => pickDocument()}>
            <Text style={styles.button}>Pick a Document</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})