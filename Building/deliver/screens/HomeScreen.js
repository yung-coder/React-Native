import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDownIcon as ChevronDownIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text className="text-green-500">
        <View className='flex-row items-center mx-4 space-x-2'>
            <Image 
              source={{
                uri: 'https://cdn.dribbble.com/users/1365713/screenshots/5381232/foodiction.png'
              }}
              className='h-7 w-7 bg-gray-200 p-4 rounded-full'
            />
            <View>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <Text className='font-bold text-xl'>Current Location
                  <ChevronDownIcon size={20} color='blue'/>
                </Text>
            </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
