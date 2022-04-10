import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button } from 'react-native';

export default function Survey() {
    const [selectedValue, setSelectedValue] = useState({gender: '', status: '', description: '', readBible: '', newClient: '', ministry: ''});
    const [text, onChangeText] = React.useState({firstName: '', lastName: '', email: ''});
    const [number, onChangeNumber] = React.useState({phone: '', age: ''});

    function submit() {
        console.log("submit 1234");
    }
    return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <View style={styles.profile}>
                <Text style={{ fontSize: 25, margin: 20, padding: 20, backgroundColor: 'azure'}}>Profile Creation</Text>
                    <Text style={{ fontSize: 17}}>First and Last Name:</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text.firstName}
                                placeholder="First Name"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text.lastName}
                                placeholder="Last Last"
                            />
                        </View>
                    <Text style={{ fontSize: 17}}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text.email}
                            placeholder="@email"
                        />
                    <Text style={{ fontSize: 17}}>Phone:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number.phone}
                            placeholder="1234567890"
                            keyboardType="numeric"
                        />
                    <Text style={{ fontSize: 17}}>Age:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number.age}
                            placeholder="22"
                            keyboardType="numeric"
                        />
                    <Text style={{ fontSize: 17, margin: 7}}>Gender:</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 25, width: 75 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.gender)}
                        >
                            <Picker.Item label="Select" value="select" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>

            </View>
            <View style={styles.survey}>
                <text style={{ fontSize: 17, margin: 10}}>Relationship Status</text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.status)}
                    >
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Single" value="single" />
                        <Picker.Item label="Dating" value="dating" />
                        <Picker.Item label="Engage" value="engage" />
                        <Picker.Item label="Married" value="married" />
                    </Picker>
                <text style={{ fontSize: 17, margin: 10}}>What best describe you?</text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.description)}
                    >
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Non-Christian" value="non-christian" />
                        <Picker.Item label="New-Christian" value="new-christian" />
                        <Picker.Item label="Christian" value="christian" />
                    </Picker>
                <text style={{ fontSize: 17, margin: 10}}>How many days a week do you read the bible?</text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.readBible)}
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
                <text style={{ fontSize: 17, margin: 10}}>Are you new to this church in the past year?</text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.newClient)}
                    >
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Yes" value="yes-church" />
                        <Picker.Item label="No" value="no-church" />
                    </Picker>
                <text style={{ fontSize: 17, margin: 10}}>Are you in ministry or aspiring to be in the ministry? (Pastor, Elder, Missionary, etc)</text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 25, width: 75 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue.ministry)}
                    >
                        <Picker.Item label="Select" value="select" />
                        <Picker.Item label="Yes - in ministry" value="yes-ministry"/>
                        <Picker.Item label="No - but interested" value="no-aspired" />
                        <Picker.Item label="No - not interested" value="no-not-interested" />
                    </Picker>
            </View>
            <br></br>
            <Button
                title="Submit"
                onPress={submit}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>


        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        height: '86%',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#ffdde1',
    }, 
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    input: {
        height: 30,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    survey: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
