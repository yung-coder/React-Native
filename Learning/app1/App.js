import { NavigationContainer } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function ScreenA({navigation}) {

const onPressHandler =()=>{
  navigation.navigate('Screen_B');
}
  return (
    <View style={styles.body}>
      <Text>Screen A</Text>
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

function ScreenB({navigation}) {
  const onPressHandler =()=>{
    navigation.navigate('Screen_A');
    // navigation.goBack();
  }
  return (
    <View style={styles.body}>
      <Text>ScreenB</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text>Go to screen A</Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} options={{
           header: () => null
        }}/>
        <Stack.Screen name="Screen_B" component={ScreenB} />
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
