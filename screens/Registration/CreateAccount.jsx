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

const CreateAccount = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              paddingTop: 30,
            }}
          >
            {colors.background == "white" ? (
              <Image
                style={{ width: 320, height: 230 }}
                source={require("../../assets/signin.png")}
              />
            ) : (
              <Image
                style={{ width: 320, height: 230 }}
                source={require("../../assets/signinDark.png")}
              />
            )}
            <ScrollView
              contentContainerStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              style={{
                height: "100%",
                width: "100%",
              }}
              showsVerticalScrollIndicator={false}
            >
              <Text
                style={{
                  paddingTop: 30,
                  fontSize: 25,
                  fontWeight: 500,
                  color: colors.text,
                  paddingBottom: 20,
                }}
              >
                Create Account
              </Text>
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholderTextColor={colors.placeholder}
                placeholder="Your name"
              />
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholderTextColor={colors.placeholder}
                placeholder="Your email"
              />
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholderTextColor={colors.placeholder}
                placeholder="Your password"
              />
              <TextInput
                style={[styles.textInput, { color: colors.background }]}
                placeholderTextColor={colors.placeholder}
                placeholder="Re-password"
              />
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white", fontSize: 15 }}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingTop: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Text
                  style={{ color: "#959598", fontSize: 15, paddingBottom: 20 }}
                >
                  already have an account?
                  <Text style={{ color: "#2DA6FF" }}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreateAccount;

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
