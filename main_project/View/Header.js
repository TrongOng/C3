import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";


export default function Header() {
  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50px',
    width: '100vh',
    backgroundColor: 'black'
  },
});
