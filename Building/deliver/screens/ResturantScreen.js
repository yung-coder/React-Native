import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { Text } from "react-native";
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
        <TouchableOpacity style={styles.buttonopc} onPress={navigation.goBack}>
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionhead}>
          <Text style={styles.descriptiontext}>{gener}</Text>
        </View>
        <View style={styles.descriptionheadtwo}>
          <View style={styles.descriptioninnerhead}>
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text style={styles.descriptionlighttext}>
              <Text style={styles.descriptionlighttextr}>{rating}</Text>
              {gener}
            </Text>
          </View>

          <View style={styles.descriptioninnerhead}>
            <MapPinIcon color="green" opacity={0.5} size={22} />
            <Text style={styles.descriptionlighttext}>Nearby. {addres}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    backgroundColor: "white",
  },
  descriptionhead: {
    padding: 4,
    paddingTop: 4,
  },
  descriptiontext: {
    fontSize: 34,
    fontWeight: "bold",
  },
  descriptionlighttext: {
    fontSize: 11,
    color: "gray",
  },
  descriptionlighttextr: {
    fontSize: 11,
    color: "green",
  },
  descriptionheadtwo: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  descriptioninnerhead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
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
