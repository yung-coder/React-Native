import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Catogerycard = ({ title, imgurl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/1365713/screenshots/5381232/foodiction.png",
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Catogerycard;
