import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, Picker, View, TextInput, Button } from 'react-native';
import { ListItem } from "@react-native-material/core";

const App = () => (
    <>
      <ListItem
        title="Brunch this weekend?"
        secondaryText="I'll be in your neighborhood doing errands this…"
      />
      <ListItem
        title="Summer BBQ"
        secondaryText="Wish I could come, but I'm out of town this…"
      />
      <ListItem
        title="Oui Oui"
        secondaryText="Do you have Paris recommendations? Have you ever…"
      />
    </>
  );
  
  export default App;
 /* 
export default function Result() {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Text>Result</Text>
                <Text>Discipler</Text>
                <View style={styles.result}> 
                    <input id="textBox1" type="text" value="Mark" readOnly />            
                    <button class="input-button"> Contact </button>
                    
                </View>
            
                
  
                <Text> </Text>
                <Text>Core</Text>
                <input id="textBox1" type="text" value="Luke" readOnly />
                <button class="input-button">Contact</button>
                <Text> </Text>
                <Text>Disciple</Text>
                <input id="textBox1" type="text" value="John" readOnly/>
                <button class="input-button">Contact</button>
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
    result: {
        border: 'solid',
        width: 300,
        height: 10,
        flexDirection: 'row',
        flex: 50,
    }
});
*/
