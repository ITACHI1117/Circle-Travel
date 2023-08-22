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
              <Text style={{ fontSize: 30, fontWeight: "600", paddingTop: 40 }}>
                Create New Password
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  width: "70%",
                  textAlign: "center",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Your new Password must be diffrent from previous used passwords
              </Text>
              <TextInput style={styles.textInput} placeholder="Password" />
              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("Confirmation")}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
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
    fontSize: 18,
    marginTop: 10,
    borderRadius: 3,
    color: "#959598",
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
