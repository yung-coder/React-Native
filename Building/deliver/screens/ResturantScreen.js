import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
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
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { Text } from "react-native";
import { urlFor } from "../sanity";
import Dishrow from "../components/Dishrow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setResturant } from "../features/resturantSlice";

const ResturantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(
      setResturant({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View style={styles.cont}>
          <Image
            style={styles.image}
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            resizeMode={"cover"}
          />
          <TouchableOpacity
            style={styles.buttonopc}
            onPress={navigation.goBack}
          >
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
          <TouchableOpacity style={styles.additionalbtn}>
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
            <Text style={styles.addintiontext}>Have a food !</Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View style={styles.exception}>
          <Text style={styles.textMenu}>Menu</Text>

          {/* Dishrow */}
          {dishes.map((dish) => {
            return (
              <Dishrow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_des}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
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
  additionalbtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
  addintiontext: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    padding: 2,
    padding: 4,
  },
  textMenu: {
    padding: 5,
    marginBottom: 3,
    fontWeight: "bold",
    fontSize: 20,
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
  exception: {
    paddingBottom: 30,
  },
});

export default ResturantScreen;
