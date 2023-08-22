import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            marginLeft: 15,
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 200 }}>Good Evening</Text>
          <Text style={{ fontSize: 30, fontWeight: 700, paddingTop: 5 }}>
            Jit Banki!
          </Text>
          <Text style={{ fontSize: 30, fontWeight: 700, paddingTop: 5 }}>
            Explore the world
          </Text>

          <View
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <Feather
              name="search"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Where are you going"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#EDF0F7",
    width: "90%",
    height: 55,
    padding: 10,
    paddingLeft: 40,
    fontSize: 18,
    marginTop: 10,
    borderRadius: 3,
    color: "#959598",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 25,
    paddingLeft: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 45,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#0094FF",
    color: "white",
  },
});
