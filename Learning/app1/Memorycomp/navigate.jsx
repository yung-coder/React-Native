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