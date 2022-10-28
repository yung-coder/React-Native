import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, featuredCatogery }) => {
  const [resturants, setrestaurnats] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == 'featured' && _id == $id]{
           ...,
           restaurants[]->{
             ...,
             dishes[]->,
             type->{
               name
             }
           },
        }[0]

    `,
        { id }
      )
      .then((data) => {
        setrestaurnats(data?.restaurants);
      });
  }, []);

  console.log(resturants);
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
        // travel
        // check
      >
        {resturants?.map((resturant) => {
          return (
            <ResturantCard
              key={resturant._id}
              id={resturant._id}
              title={resturant.name}
              imgUrl={resturant.image}
              rating={resturant.rating}
              addres={resturant.addres}
              short_desc={resturant.short_description}
              gener={resturant.type?.name}
              dishes={resturant.dishes}
              long={resturant.Long}
              lat={resturant.lat}
            />
          );
        })}

        {/* <ResturantCard
          id={123}
          title="Check"
          rating={4.5}
          addres="123 main "
          short_desc="Description"
          gener="fish"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          title="Check"
          rating={4.5}
          addres="123 main "
          short_desc="Description"
          gener="fish"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          title="Check"
          rating={4.5}
          addres="123 main "
          short_desc="Description"
          gener="fish"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          title="Check"
          rating={4.5}
          addres="123 main "
          short_desc="Description"
          gener="fish"
          dishes={[]}
          long={20}
          lat={0}
        /> */}
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
    fontSize: "bold",
    padding: 4,
  },
  text: {
    padding: 4,
    fontSize: 13,
  },
  scroll: {
    paddingTop: 4,
  },
});

export default FeaturedRow;
