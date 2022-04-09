import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function Header() {
  return (
    <View>
    <AppBar
      style={styles.container}
      title="Old North ✝️"
      subtitle="Christ Center Church"
      centerTitle={true}
      color="black"
      leading={props => (
        <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
      )}
      trailing={props => (
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    width: '100vh',
    backgroundColor: 'black',
    
  }
});
