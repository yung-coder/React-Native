import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ title, description, featuredCatogery }) => {
  return (
    <View>
      <View style={styles.segment}>
        <Text className="font-bold text-2xl">{title}</Text>
        <ArrowRightIcon color="blue" />
      </View>
      <Text style={styles.text}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        <ResturantCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  segment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    paddingRight: 4,
  },
  text: {
    paddingRight: 4,
    fontSize: 10,
  },
  scroll: {
    paddingTop: 4,
  },
});

export default FeaturedRow;
