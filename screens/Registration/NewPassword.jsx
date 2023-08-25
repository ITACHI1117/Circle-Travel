import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const NewPassword = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View style={{ display: "flex", width: "100%" }}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                  paddingTop: 40,
                  color: colors.text,
                }}
              >
                Create New Password
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  width: "70%",
                  textAlign: "center",
                  paddingTop: 20,
                  paddingBottom: 20,
                  color: colors.text,
                }}
              >
                Your new Password must be diffrent from previous used passwords
              </Text>
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholder="Password"
                placeholderTextColor={colors.placeholder}
              />
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholder="Confirm Password"
                placeholderTextColor={colors.placeholder}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("SignIn")}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#EDF0F7",
    width: "90%",
    height: 45,
    padding: 10,
    fontSize: 13,
    marginTop: 10,
    borderRadius: 3,
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
