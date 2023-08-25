import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const EditProfile = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 10, position: "absolute", left: 10 }}
        >
          <AntDesign name="arrowleft" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={{ color: colors.text, fontWeight: 700, fontSize: 20 }}>
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../../assets/pic.jpg")}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <AntDesign
          style={{
            position: "absolute",
            left: 20,
            marginTop: 26,
            marginLeft: 10,
          }}
          name="user"
          size={20}
          color={colors.text}
        />
        <TextInput
          style={[
            styles.textInput,
            { borderColor: colors.text, color: colors.text },
          ]}
          placeholderTextColor={colors.placeholder}
          placeholder="Your name"
        />
        <AntDesign
          name="mail"
          size={20}
          color={colors.text}
          style={{
            position: "absolute",
            left: 20,
            marginTop: 88,
            marginLeft: 10,
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            { borderColor: colors.text, color: colors.text },
          ]}
          placeholderTextColor={colors.placeholder}
          placeholder="Your email"
        />
        <AntDesign
          name="phone"
          size={20}
          color={colors.text}
          style={{
            position: "absolute",
            left: 20,
            marginTop: 146,
            marginLeft: 10,
          }}
        />
        <TextInput
          style={[
            styles.textInput,
            { borderColor: colors.text, color: colors.text },
          ]}
          placeholderTextColor={colors.placeholder}
          placeholder="Your password"
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          bottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            backgroundColor: "#0094FF",
            height: 50,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 13 }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "transparent",
    borderWidth: 0.5,
    width: "90%",
    height: 45,
    padding: 10,
    paddingLeft: 40,
    fontSize: 13,
    marginTop: 15,
    borderRadius: 5,
  },
});
