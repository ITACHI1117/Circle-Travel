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
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const SignIn = ({ navigation }) => {
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
            }}
          >
            {colors.background == "white" ? (
              <Image
                style={{ width: 320, height: 230 }}
                source={require("../../assets/createAccount.png")}
              />
            ) : (
              <Image
                style={{ width: 320, height: 230 }}
                source={require("../../assets/createAccountDark.png")}
              />
            )}

            <Text
              style={{
                paddingTop: 30,
                fontSize: 25,
                fontWeight: 500,
                color: colors.text,
                paddingBottom: 20,
              }}
            >
              Sign In
            </Text>
            <TextInput
              style={[styles.textInput, { color: colors.placeholder }]}
              placeholder="Your email"
              placeholderTextColor={colors.placeholder}
            />
            <TextInput
              style={[styles.textInput, { color: colors.placeholder }]}
              placeholderTextColor={colors.placeholder}
              placeholder="Your password"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("Home")}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 20 }}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={{ color: "#959598", fontSize: 15 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onPress={() => navigation.navigate("CreateAccount")}
            >
              <Text
                style={{ color: "#959598", fontSize: 15, paddingBottom: 0 }}
              >
                Dont have an Account?
                <Text style={{ color: "#2DA6FF" }}> Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignIn;

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
