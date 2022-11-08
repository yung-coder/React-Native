import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen  name='Home' component={HomeScreen}/>
         <Stack.Screen  name='Resturant' component={ResturantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
