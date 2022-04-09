import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button } from 'react-native';


export default function Survey() {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Text>Profile</Text>
                <Text>First and Last Name</Text>
                    <View style={styles.name}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Last Last"
                        />
                    </View>
                <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="@email"
                    />
                <Text>Phone</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="(1800)-Phone Number"
                        keyboardType="numeric"
                    />
                <Text>Date of Birth</Text>
                <Text>Gender</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other-gender" />
                    </Picker>

        </View>
        <View style={styles.survey}>
            <text>Relationship Status</text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 25, width: 75 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Single" value="single" />
                    <Picker.Item label="Dating" value="dating" />
                    <Picker.Item label="Engage" value="engage" />
                    <Picker.Item label="Married" value="married" />
                </Picker>
            <text>What best describe you?</text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 25, width: 75 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Non-Christian" value="non-christian" />
                    <Picker.Item label="New-Christian" value="new-christian" />
                    <Picker.Item label="Christian" value="christian" />
                </Picker>
            <text>How many days a week do you read the bible?</text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 25, width: 75 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="0" value="single" />
                    <Picker.Item label="1" value="dating" />
                    <Picker.Item label="2" value="engage" />
                    <Picker.Item label="3" value="married" />
                    <Picker.Item label="4" value="married" />
                    <Picker.Item label="5" value="married" />
                    <Picker.Item label="6" value="married" />
                    <Picker.Item label="7" value="married" />
                </Picker>
            <text>Are you new to this church in the past year?</text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 25, width: 75 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Yes" value="yes-church" />
                    <Picker.Item label="No" value="no-church" />
                </Picker>
            <text>Are you in ministry or aspiring to be in the ministry? (Pastor, Elder, Missionary, etc)</text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 25, width: 75 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select" value="select" />
                    <Picker.Item label="Yes - in ministry" value="yes-ministry"/>
                    <Picker.Item label="No - but interested" value="no-aspired" />
                    <Picker.Item label="No - not interested" value="no-not-interested" />
                </Picker>
        </View>
        <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}/>
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

