import { View, Text, ScrollView } from "react-native";
import React from "react";
import Catogerycard from "./Catogerycard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 35,
        paddingTop: 18,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Catogerycard
        imgUrl='https://cdn.dribbble.com/users/1365713/screenshots/5381232/foodiction.png'
        title="Hey"
      />
    </ScrollView>
  );
}
