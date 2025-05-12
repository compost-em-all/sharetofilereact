import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import FilePicker from "../components/filepicker";

const [selectedDocument, setSelectedDocument] = useState<DocumentPicker.DocumentPickerAsset>();

const pickDocument = async () => {
    try {
        const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true});

        if (!result.canceled) {
            const successResult = result as DocumentPicker.DocumentPickerSuccessResult;

            setSelectedDocument(result.assets[0]);

        } else {
            console.log("Document selection cancelled");
        }
    } catch (error) {
        console.log("Picking document:", error);
    }
}



export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      {/* <FilePicker /> */}
      <TouchableOpacity onPress={() => pickDocument()}></TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
