import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Top5CheapTours from "./Top5CheapTours";

export default function Home({ navigation }) {
  const { colors } = useTheme();

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
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              position: "absolute",
              right: 30,
              marginTop: 20,
              zIndex: 1,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../../assets/pic.jpg")}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 15, fontWeight: 200, color: colors.text }}>
            Good Evening
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 700,
              paddingTop: 5,
              color: colors.text,
            }}
          >
            Jit Banki!
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 700,
              paddingTop: 5,
              color: colors.text,
            }}
          >
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
              style={[styles.textInput, { color: colors.background }]}
              placeholder="Where are you going"
              placeholderTextColor={colors.placeholder}
            />
          </View>
          <View>
            <Top5CheapTours />
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
    height: 45,
    padding: 10,
    paddingLeft: 40,
    fontSize: 15,
    marginTop: 10,
    borderRadius: 3,
    color: "#959598",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 20,
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
