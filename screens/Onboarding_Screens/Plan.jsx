import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Plan = ({ route }) => {
  const { color } = route.params;
  console.log(color);
  // if (colorscheme === "dark") {
  //   console.log("hi");
  // }
  return (
    <SafeAreaView>
      <View style={styles.backView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../assets/undraw_Traveling_yhxq.png")}
          />
          <Text style={{ paddingTop: 25, fontSize: 30, fontWeight: 500 }}>
            Plan Your Trip
          </Text>
          <Text
            style={{
              width: "80%",
              paddingTop: 20,
              fontSize: 25,
              fontWeight: 200,
              textAlign: "center",
            }}
          >
            Save places and book your perfect trip with Circle App
          </Text>
        </View>
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
    justifyContent: "space-around",
    backgroundColor: "white",
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
