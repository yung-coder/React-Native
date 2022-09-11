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
} from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setname] = useState("jack");
  const [Refreshing, setrefreshing] = useState(false);
  const [itmes, setitems] = useState([
     { item: 'Item 1'},
     { item: 'Item 2'},
     { item: 'Item 3'},
     { item: 'Item 4'},
     { item: 'Item 5'},
  ])
  return (
    // <ScrollView 
    //    refreshControl={
    //      <RefreshControl 
    //         refreshing={Refreshing}
    //      />
  
    //    }
    // />

    <FlatList 
      keyExtractor={(itmes , index) => index.toString()}
      data={itmes}
      renderItem={({item}) =>(
         <View key={item.Key}>
           <Text>{item.item}</Text>
         </View>
      )}
    />

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
