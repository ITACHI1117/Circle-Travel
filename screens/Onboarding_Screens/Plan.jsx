import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const Plan = ({ navigation }) => {
  const { colors } = useTheme();
  const scrollViewRef = useRef(null);
  const [update, setUpdate] = useState(0);

  const data = [
    {
      id: 1,
      img: require("../../assets/Traveling.png"),
    },
    {
      id: 2,
      img: require("../../assets/adventure.png"),
    },
    {
      id: 3,
      img: require("../../assets/Relaxation.png"),
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const scroll = () => {
    if (update <= 1) {
      setUpdate(update + 1);
    }
    console.log(windowWidth);
    if (update === 0) {
      scrollViewRef.current?.scrollTo({
        x: windowWidth + 1,
        animated: true,
      });
    }
    if (update === 1) {
      scrollViewRef.current?.scrollTo({
        x: windowWidth + windowWidth,
        animated: true,
      });
    }
    console.log(update);
  };

  const scrollEnd = () => {
    setUpdate(2);
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const { width: windowWidth } = useWindowDimensions();
  img = "adventure.png";
  return (
    <SafeAreaView>
      <View style={styles.backView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => scrollEnd()}>
            <Text style={{ fontSize: 20, color: colors.text, paddingTop: 20 }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollViewRef}
          scrollEnabled={false}
          centerContent={true}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: windowWidth * 3,
            height: "100%",

            marginTop: 30,
          }}
        >
          {data.map((image) => {
            return (
              <View
                key={image.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  width: "40%",
                  height: "100%",
                  margin: 0,
                }}
              >
                <Image style={{ width: 250, height: 150 }} source={image.img} />
                <Text
                  style={{
                    paddingTop: 25,
                    fontSize: 30,
                    fontWeight: 500,
                    color: colors.text,
                  }}
                >
                  Plan your trip
                </Text>
                <Text
                  style={{
                    width: "80%",
                    paddingTop: 20,
                    fontSize: 25,
                    fontWeight: 200,
                    textAlign: "center",
                    color: colors.text,
                  }}
                >
                  Save places and book your perfect trip with Circle App
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 90,
          }}
        >
          {update < 2 ? (
            <TouchableOpacity
              onPress={() => scroll()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0094FF",
                width: "90%",
                height: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.replace("SignIn")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0094FF",
                width: "90%",
                height: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Plan;

const styles = StyleSheet.create({
  backView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    width: "100%",
    height: "99%",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingTop: 0,
    paddingRight: 15,
  },
  sliderImg: {
    width: 100,
  },
});
