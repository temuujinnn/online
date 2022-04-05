import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import * as Animatable from "react-native-animatable";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../assets/colors/colors";

const data = [
  {
    title: "VIoT",
    text: "Монголдоо анхдагч IoT технологид суурилсан систем",
    image: require("../assets/images/board1.png"),
  },
  {
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/board2.png"),
  },
  {
    title: "Rocket guy",
    text: "I'm already out of descriptions Lorem ipsum bla bla bla",
    image: require("../assets/images/board3.png"),
  },
  {
    title: "Rocket guy2",
    text: "I'm already out of descriptions Lorem ipsum bla bla bla",
    image: require("../assets/images/board4.png"),
  },
];

const Onboard = (props) => {
  let [fontsLoaded] = useFonts({
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const renderItem = ({ item }) => {
    return (
      <Animatable.View
        duration={1000}
        animation="fadeInRightBig"
        style={styles.slide}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Image source={item.image} style={styles.image} />
      </Animatable.View>
    );
  };

  const keyExtractor = (item) => item.title;
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          showNextButton={false}
          showDoneButton={false}
          showSkipButton={false}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Animatable.Text
            duration={1000}
            animation="fadeInRightBig"
            style={styles.skipButton}
            onPress={props.doneHandler}
          >
            Алгасах
          </Animatable.Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 70,
  },
  image: {
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    color: colors.green,
    textAlign: "center",
    fontFamily: "roboto-bold",
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  dot: {
    backgroundColor: colors.green,
    left: 85,
  },
  activeDot: {
    backgroundColor: colors.green,
    left: 85,
    width: 50,
  },
  skipButton: {
    borderWidth: 1,
    borderColor: "#F1F1F1",
    width: 100,
    textAlign: "center",
    padding: 8,
    borderRadius: 15,
    marginBottom: 30,
    fontFamily: "roboto-regular",
  },
});

export default Onboard;
