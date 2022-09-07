import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  const handelpress = () => {
    console.log("pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={() => Alert.prompt("My title", "My message", (text) => console.log(text) )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // form diffrent platform
    // alignItems: "center",
    // justifyContent: "center",
  },
});
