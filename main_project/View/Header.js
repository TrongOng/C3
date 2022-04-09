import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>
      <Text>I am Header...</Text>
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
