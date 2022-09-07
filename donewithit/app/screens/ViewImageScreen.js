import React from "react";
import { Image, StyleSheet, View } from "react-native";
const ViewImageScreen = () => {
  return (
    <View style={styles.cont}>
     <View style={styles.closeicons}></View>
     <View style={styles.deleticon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/bg.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  cont:{
    backgroundColor: 'black',
    flex: 1,
  },
  closeicons:{
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  deleticon:{
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
    position: 'absolute',
    top: 50,
    left: '80%',
  }
});

export default ViewImageScreen;
