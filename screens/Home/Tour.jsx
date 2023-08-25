import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Tour = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 5, position: "absolute", left: 10 }}
        >
          <AntDesign name="arrowleft" size={28} color={colors.text} />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../assets/beach.jpg")}
        style={{ width: "100%", height: 300 }}
      />
      <ScrollView
        style={{
          marginTop: 250,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1000,
          backgroundColor: colors.background,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        <View>
          <Text>hhh</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tour;
