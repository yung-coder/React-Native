import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AdjustmentsHorizontalIcon, ChevronDownIcon as ChevronDownIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='bg-white pt-5'>
        <View className='flex-row items-center mx-4 space-x-3 pb-3'>
            <Image 
              source={{
                uri: 'https://cdn.dribbble.com/users/1365713/screenshots/5381232/foodiction.png'
              }}
              className='h-7 w-7 bg-gray-200 p-4 rounded-full'
            />

            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <Text className='font-bold text-xl'>
                  Current Location
                  <ChevronDownIcon size={20} color='blue'/>
                </Text>
            </View>

            <UserIcon size={20} color='blue'/>
        </View>

        {/* search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
           <View className='flex-row flex-1 space-x-2  bg-gray-200 p-3'>
             <MagnifyingGlassIcon color='blue'/>
             <TextInput placeholder="Restaurants"/>
           </View>
           <AdjustmentsHorizontalIcon  color='blue'/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
