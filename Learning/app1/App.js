import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Linking} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Check</Text>
      <Button title='check' onPress={()=>{Linking.openURL('https://github.com/yung-coder')}}></Button>
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
