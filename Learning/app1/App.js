import { NavigationContainer } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './Memorycomp/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ScreenA({navigation}) {

const onPressHandler =()=>{
  navigation.navigate('Screen_B' , {ItemName: 'Item from Srenn A', ItemId: 12});  
}
  return (
    <View style={styles.body}>
      <Text>Home</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text>Go to screen B</Text>
      </Pressable>
    </View>
  );
}

// function ScreenB({navigation , route}) {

//   const {ItemName , ItemId} = route.params;
//   const onPressHandler =()=>{
//     navigation.navigate('Screen_A');
//     navigation.goBack();
//   }
//   return (
//     <View style={styles.body}>
//       <Text>ScreenB</Text>
//       <Pressable
//         onPress={onPressHandler}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#ddd" : "#0f0",
//         })}
//       >
//         <Text>Go to screen A</Text>
//       </Pressable>
//       <Text>{ItemName}</Text>
//       <Text>{ItemId}</Text>
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{
           header: () => null
        }}/>
        <Stack.Screen name="Screen_A" component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
