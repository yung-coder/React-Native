import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logocont}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Text>Sale it</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "black",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocont:{
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
