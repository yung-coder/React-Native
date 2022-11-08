import {  Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Catogerycard = ({ title, imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        style={{ width: 150, height: 100 }}
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
        resizeMode={"cover"}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Catogerycard;
