import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button } from 'react-native';
import Header from './Header.js'
import Footer from './Footer.js'


export default function Survey() {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
    <View style={styles.container}>
        <Header/>
        <h1> Home Screen</h1>
        <Footer/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    profile: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        flexDirection: 'row',
    },
    input: {
        height: 30,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    survey: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

