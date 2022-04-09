import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button } from 'react-native';


export default function ContactInfo() {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Text>Contact Information</Text>
                <Text>Mark</Text>
                <input id="textBox1" type="text" value="Phone: 123456789" readOnly/>
                <Text> </Text>
                <input id="textBox1" type="text" value="Email: test@gmail.com" readOnly/>
                
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    profile: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
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
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

