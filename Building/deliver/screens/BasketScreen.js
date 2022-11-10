import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
import { selectResturant } from "../features/resturantSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupheditems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    });
  }, [items]);
  return <View></View>;
};

export default BasketScreen;
