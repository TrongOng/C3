import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Survey from './View/Survey.js'
import Header from './View/Header.js'
import Footer from './View/Footer.js'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7zuCWXJJUgXP4OPoNdHex-Bmf7-SdK-s",
  authDomain: "c3-project-d986f.firebaseapp.com",
  projectId: "c3-project-d986f",
  storageBucket: "c3-project-d986f.appspot.com",
  messagingSenderId: "315139222103",
  appId: "1:315139222103:web:1e1d96a106c18014d4d112",
  measurementId: "G-9RFW1H5XE2"
};

export default function App() {

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <Survey/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
