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
        style={{ width: 150, height: 100 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl2S90n_PzBd0RlbSNA7MQtKHGxB-o3ewGucq2iDeCFtsbjL31NMs5RuQK-8-P6IcJ1Y&usqp=CAU",
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
    marginRight: 3,
    shadowColor: 'black',
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
    marginRight: 8,
  }
});

export default ResturantCard;