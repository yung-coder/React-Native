import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handelpress = () => {
    console.log("pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handelpress}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore
        officiis neque ipsum id modi sapiente ea ad tenetur nemo laborum
        pariatur hic officia quas, mollitia vitae maxime debitis ipsa fuga
        asperiores libero totam.
      </Text>
      <TouchableWithoutFeedback onPress={()=>console.log('image cuming')}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
        {/* <StatusBar style="auto" /> */}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
