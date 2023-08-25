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

const ResetPassword = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View style={{ display: "flex", width: "100%" }}>
            <TouchableOpacity
              style={{ display: "flex", paddingTop: 20 }}
              onPress={() => navigation.goBack()}
            >
              {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
              <AntDesign
                name="arrowleft"
                size={28}
                color={colors.text}
                style={{ paddingLeft: 10 }}
              />
            </TouchableOpacity>
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
                  paddingTop: 30,
                  color: colors.text,
                }}
              >
                Reset Password
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  width: "70%",
                  textAlign: "center",
                  paddingTop: 10,
                  paddingBottom: 20,
                  color: colors.text,
                }}
              >
                Enter the email address associated with your account.
              </Text>
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholder="Your email"
                placeholderTextColor={colors.placeholder}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("Confirmation")}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Send Mail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#EDF0F7",
    width: "90%",
    height: 45,
    padding: 10,
    fontSize: 13,
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
