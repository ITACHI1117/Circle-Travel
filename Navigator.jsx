import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Plan from "./screens/Onboarding_Screens/Plan";
import { Appearance, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  // Getting the device default color mode
  const [colorScheme, setColorScheme] = React.useState(
    Appearance.getColorScheme()
  );

  React.useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) =>
      setColorScheme(colorScheme)
    );
  }, []);

  const dark = {
    dark: true,
    colors: {
      primary: "green",
      background: "black",
      card: "black",
      text: "white",
      border: "blue",
      notification: "green",
    },
  };
  const light = {
    dark: false,
    colors: {
      primary: "blue",
      background: "white",
      card: "green",
      text: "black",
      border: "blue",
      notification: "green",
    },
  };
  //  Getting themes
  const { colors } = useTheme();

  return (
    <NavigationContainer theme={colorScheme === "dark" ? dark : light}>
      <StatusBar animated={true} barStyle={colors.text} />
      <Stack.Navigator>
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{ title: null, headerShown: false }}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
