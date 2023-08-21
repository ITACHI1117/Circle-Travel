import React, { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const Plan = () => {
  const { colors } = useTheme();
  const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDMHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    "../../assets/undraw_Traveling_yhxq.png",
  ];

  const data = [
    {
      id: 1,
      img: "../../assets/undraw_adventure_map_hnin.png",
    },
    {
      id: 2,
      img: "../../assets/undraw_Relaxation_re_ohkx.png",
    },
    {
      id: 3,
      img: "../../assets/undraw_Traveling_yhxq.png",
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.backView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: colors.text }}>Skip</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: windowWidth * 3,
            height: 300,
            backgroundColor: "green",
            marginTop: 30,
          }}
          style={{
            display: "flex",
            width: windowWidth,
          }}
        >
          {images.map((image) => {
            return (
              <View
                key={image}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  width: "40%",
                  height: "100%",
                  margin: 0,
                  backgroundColor: "red",
                }}
              >
                <Image
                  style={{ width: 250, height: 150 }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
                  }}
                />
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
          <TouchableOpacity
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
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
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
