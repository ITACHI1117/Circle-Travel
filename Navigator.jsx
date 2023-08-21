import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Plan from "./screens/Onboarding_Screens/Plan";
import { SafeAreaView } from "react-native-safe-area-context";
import { DynamicColorIOS } from "react-native";
import { Appearance } from "react-native";

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
  console.log(colorScheme);
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{ title: null, headerShown: false }}
          initialParams={{ color: colorScheme }}
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
