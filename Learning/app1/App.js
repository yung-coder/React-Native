import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import React, { useState } from "react";
export default function App() {
  const [sumbited , setsumbited] = useState(false);
  const onPressHandler = ()=>{
    setsumbited(!sumbited);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Check
      </Text>
    <TextInput style={styles.input} placeholder='cum'> 
    </TextInput>
    {/* <Button title="Sumbit"  onPress={onPressHandler}>
    </Button> */}
    <TouchableWithoutFeedback onPress={onPressHandler} >
      <View style={styles.button}>
        <Text>
          {sumbited ? 'clear' : 'Sumbit'}
        </Text>
      </View>
    </TouchableWithoutFeedback >
    </View>
    // <ScrollView 
    //    refreshControl={
    //      <RefreshControl 
    //         refreshing={Refreshing}
    //      />
  
    //    }
    // />

    // <FlatList 
    //   keyExtractor={(itmes , index) => index.toString()}
    //   data={itmes}
    //   renderItem={({item}) =>(
    //      <View key={item.Key}>
    //        <Text>{item.item}</Text>
    //      </View>
    //   )}



    // section list also see

    // <View style={styles.container}>
    //   {/* <Text>{name}</Text>
    //   <Button title='check' onPress={()=>{Linking.openURL('https://github.com/yung-coder')}}></Button>
    //   <Button title='click' onPress={() => {setname('pika')}}>lick</Button> 
    //   */}
    //   <View style={styles.view1}>
        
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  input:{
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign:'center',
    fontSize: 20
  },
  button:{
    color: 'black',
    backgroundColor: 'green',
  }
});
