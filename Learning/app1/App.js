import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setname] = useState("jack");
  const [Refreshing, setrefreshing] = useState(false);
  return (
    <ScrollView 
       refreshControl={
         <RefreshControl 
            refreshing={Refreshing}
         />
  
       }
    />

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
