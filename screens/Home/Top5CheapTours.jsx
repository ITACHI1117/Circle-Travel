import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Top5CheapTours = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={{ paddingTop: 50, width: "100%" }}>
      <Text style={{ color: colors.text, fontSize: 20, fontWeight: 700 }}>
        Top 5 Cheap Tours
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20, width: "100%", height: 350, marginLeft: -10 }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Tour")}
        >
          <View
            style={[
              styles.box,
              styles.shadowProp,
              { shadowColor: colors.shadowColor },
            ]}
          >
            <View
              style={{
                backgroundColor: colors.background,
                height: "100%",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/beach.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <View
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    Maldavis Package
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 15,
                      fontWeight: 200,
                    }}
                  >
                    South Asia
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "space-around",
                    marginRight: 10,
                  }}
                >
                  <AntDesign name="star" size={13} color="gold" />
                  <Text style={{ color: "gold", fontSize: 13 }}>4.6</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Tour")}
        >
          <View
            style={[
              styles.box,
              styles.shadowProp,
              { shadowColor: colors.shadowColor },
            ]}
          >
            <View
              style={{
                backgroundColor: colors.background,
                height: "100%",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/beach.jpg")}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <View
                style={{
                  paddingTop: 10,
                  paddingLeft: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    Maldavis Package
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 15,
                      fontWeight: 200,
                    }}
                  >
                    South Asia
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "space-around",
                    marginRight: 10,
                  }}
                >
                  <AntDesign name="star" size={13} color="gold" />
                  <Text style={{ color: "gold", fontSize: 13 }}>4.6</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Top5CheapTours;

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 230,
    backgroundColor: "transparent",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 20,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});
