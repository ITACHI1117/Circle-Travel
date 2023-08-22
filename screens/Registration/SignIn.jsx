import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const SignIn = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "1005",
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <Image
          style={{ width: 320, height: 300 }}
          source={require("../../assets/adventure.png")}
        />
      </View>
      <Text
        style={{
          paddingTop: 25,
          fontSize: 30,
          fontWeight: 500,
          color: colors.text,
        }}
      >
        SignIn
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
