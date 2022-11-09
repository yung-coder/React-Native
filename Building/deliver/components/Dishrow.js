import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

const Dishrow = ({ id, name, description, price, image }) => {
  const [isPressed, setisPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.main}
        onPress={() => setisPressed(!isPressed)}
      >
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

      {isPressed && (
        <View style={styles.icons}>
          <View style={styles.iconsinner}>
            <TouchableOpacity>
              <MinusCircleIcon size={40} color="blue" />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icons: {
    backgroundColor: "white",
    padding: 4,
  },
  iconsinner: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingBottom: 3,
  },
  main: {
    backgroundColor: "white",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 4,
  },
  godhead: {
    display: "flex",
    flexDirection: "row",
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
