import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({ navigation }) => {
  const [name, setname] = useState();

  const setdata = async () => {
    if (name.length == 0) {
      Alert.alert("Warning", "enter");
    } else {
      try {
        await AsyncStorage.setItem("Username", name);
        navigation.navigate("Screen_A");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="enter name"
        onChangeText={(value) => setname(value)}
      />
      <Button title="Login" color="green" onPress={setdata}></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "blue",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    color: "white",
  },
});
