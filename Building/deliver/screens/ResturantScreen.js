import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Text } from "react-native-svg";
import { urlFor } from "../sanity";

const ResturantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      title,
      rating,
      addres,
      short_des,
      dishes,
      long,
      imgUrl,
      lat,
      gener,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.cont}>
        <Image
          style={styles.image}
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          resizeMode={"cover"}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonopc}
        onPress={navigation.goBack}
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonopc: {
    position: "absolute",
    top: 40,
    left: 5,
    padding: 2,
    backgroundColor: "gray",
    borderRadius: 100,
  },
  cont: {
    position: "relative",
  },
  image: {
    height: 250,
    padding: 4,
    width: "100%",
  },
});

export default ResturantScreen;
