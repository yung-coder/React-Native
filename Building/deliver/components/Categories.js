import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Catogerycard from "./Catogerycard";
import sanityClient, { urlFor } from "../sanity";
export default function Categories() {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setcategories(data);
      console.log(categories);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 35,
        paddingTop: 18,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        return (
          <Catogerycard
            key={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
}
