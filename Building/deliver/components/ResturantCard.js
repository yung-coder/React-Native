import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const ResturantCard = ({
  id,
  title,
  rating,
  addres,
  short_des,
  dishes,
  long,
  lat,
  gener,
}) => {
  return (
    <TouchableOpacity style={styles.cont1}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: "https://cdn.dribbble.com/users/1365713/screenshots/5381232/foodiction.png",
        }}
        resizeMode={"cover"}
      />
      <View>
        <Text style={styles.text1}>{title}</Text>
        <View style={styles.cont2}>
          <StarIcon color="green" opacity={0.5} size={22}/>
          <Text style={styles.text2}>
            <Text style={styles.text3}>{rating}</Text>.{gener}
          </Text>
        </View>
        <View style={styles.cont3}>
           <MapPinIcon size={22} color='gray' opacity={0.4}/>
           <Text style={styles.text4}>Nearby - {addres}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    paddingTop: 2,
  },
  text2:{
    color: 'gray'
  },
  text3:{
    color: 'green'
  },
  text4:{
     color: 'gray',
  },
  cont3:{
    flexDirection: "row",
    alignItems: 'center'
  },
  cont2:{
    flexDirection: "row",
    alignItems: "center"
  },
  cont1:{
    backgroundColor: 'white',
    marginRight: 3,
  }
});

export default ResturantCard;