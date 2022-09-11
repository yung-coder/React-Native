import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Linking} from 'react-native';
import React , {useState} from 'react'
export default function App() {
  const [name, setname] = useState('jack')
  return (
    <View style={styles.container}>
      {/* <Text>{name}</Text>
      <Button title='check' onPress={()=>{Linking.openURL('https://github.com/yung-coder')}}></Button>
      <Button title='click' onPress={() => {setname('pika')}}>lick</Button> 
      */}
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>1</Text>
      </View>
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
  view1:{
    width: 100,
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2:{
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3:{
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
  }
});
