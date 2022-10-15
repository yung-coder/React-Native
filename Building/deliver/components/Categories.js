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
        title="Hey"
      />
    </ScrollView>
  );
}
