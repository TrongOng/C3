import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button, ImageBackground } from 'react-native';
import { Box } from "@react-native-material/core";
import Header from './Header.js'
import Footer from './Footer.js'
import Survey from './Survey.js'

export default function Home() {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const image = { uri: "https://images.pexels.com/photos/971515/pexels-photo-971515.jpeg" };

    return (
        <View>
            <Header />
            <ImageBackground source={image} resizeMode="cover" style={styles.hero}>
                <View style={styles.heroBG}>
                    <Text style={styles.text}>A way to get closer to the Church..</Text>
                    <View style={styles.loginGrid}>
                        
                        <Button
                            title="Sign Up"
                            style={styles.signupButton}
                        />
                        <Button
                            title="Log In"
                            
                            style={styles.signupButton}
                        />
                    </View>
                </View>
            </ImageBackground>
            <Footer />
            <Survey/>
        </View>
    );
}
const styles = StyleSheet.create({

    hero: {
        height: '95vh'
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: "20%"
    },
    heroBG: {
        backgroundColor: "#000000c0",
        height: '100%',
    },
    signupButton: {
        maxWidth: '10%',
        margin: '20px',
        padding: '20px'
    },
    loginGrid: {
        maxWidth: '40%',
        marginLeft: '30%',
        display: 'flex'
        
    }
});

