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
  TouchableHighlight,
  ToastAndroid,
  Alert,
  Modal,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setname] = useState("");
  const [sumbited, setsumbited] = useState(false);
  const [showWarning, setshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setsumbited(!sumbited);
    } else {
      setshowWarning(true);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Modal
        visible={showWarning}
        onRequestClose={() => {
          setshowWarning(false);
        }}
      >
        <View style={styles.centered}>
          <View style={styles.warning_modal}>
            <View style={styles.warning}>
              <Text>Warninig</Text>
            </View>
            <Text>Checking it runnnig modal for it</Text>
            <Pressable onPress={() => setshowWarning(false)}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
            {sumbited ? (
              <View>
                <Text style={styles.text}>you are registered as {name}</Text>
                <Image
                  style={styles.image}
                  source={require("./assets/done.jpg")}
                 />
              </View>
            ) : (
              <Image
                style={styles.image}
                source={require("./assets/error.png")}
              ></Image>
            )}
          </View>
        </View>
      </Modal> */}
      <Text style={styles.text}>Check</Text>
      <TextInput
        style={styles.input}
        placeholder="cum"
        onChangeText={(value) => setname(value)}
      ></TextInput>
      <Button title="Sumbit" onPress={onPressHandler}></Button>
      {sumbited ? (
        <Text>{name}</Text>
      ) : (
        null
      )}
      {!sumbited ? 
        <View>
          <Text style={styles.text}>you are registered as {name}</Text>
          <Image style={styles.image} source={require("./assets/done.jpg")} />
        </View>
      : 
        <Image
          style={styles.image}
          source={require("./assets/error.png")}
        ></Image>
      }
      {/* <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text>{sumbited ? "clear" : "Sumbit"}</Text>
        </View>
      </TouchableWithoutFeedback> */}
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
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    color: "black",
    backgroundColor: "green",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#999",
    backgroundColor: "white",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
