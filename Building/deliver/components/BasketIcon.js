import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketotal = useSelector(selectBasketTotal);

  if(items.length === 0) return null;
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.hero} onPress={() => navigation.navigate("Basket")}>
        <Text style={styles.text1}>{items.length}</Text>
        <Text style={styles.text2}>View Basket</Text>
        <Text styles={styles.mainsec}>
          <Currency quantity={basketotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        width: 359,
        position: "absolute",
        bottom: 10,
        zIndex: 20,
    },
    hero: {
      margin: 25,
      padding: 10,
      borderRadius: 60,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: "blue",
    },
  mainsec: {
    color: "white",
    fontSize: 25,
    fontWeight: "400",
  },
  text1:{
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
    padding: 4,
    borderRadius: 15,
    backgroundColor: 'gray'
  },
  text2:{
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
    padding: 4,
    alignItems: 'center'
  }
});

export default BasketIcon;
