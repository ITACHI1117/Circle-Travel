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

const Confirmation = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
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
            Check your email
          </Text>
          <TouchableOpacity>
            <Ionicons name="md-checkmark-circle" size={100} color="#2DA6FF" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              width: "70%",
              textAlign: "center",
              paddingTop: 20,
              paddingBottom: 20,
              fontWeight: 200,
              color: colors.text,
            }}
          >
            Enter the email address associated with your account.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("NewPassword")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;

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
    position: "absolute",
    bottom: 20,
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
