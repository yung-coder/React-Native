import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";

const Dishrow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.godhead}>
        <View style={styles.mainhead}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{description}</Text>
          <Text style={styles.text3}>
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: urlFor(image).url(),
            }}
            resizeMode={"cover"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 4,
  },
  godhead:{
    display: 'flex',
    flexDirection: 'row',
  },
  mainhead: {
     flex: 1,
     padding: 2,
  },
  mainheadsec: {
    flex: 1,
    padding: 2,
  },
  text1: {
    fontSize: 24,
    marginBottom: 1,
  },
  text2: {
    color: "gray",
  },
  text3: {
    color: "gray",
  },
  image: {
    padding: 4,
    width: 150,
    height: 100,
    backgroundColor: "gray",
  },
});

export default Dishrow;
