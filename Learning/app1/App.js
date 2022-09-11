import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Linking} from 'react-native';
import React , {useState} from 'react'
export default function App() {
  const [name, setname] = useState('jack')
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title='check' onPress={()=>{Linking.openURL('https://github.com/yung-coder')}}></Button>
      <Button title='click' onPress={() => {setname('pika')}}>lick</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'red',
  },
});
