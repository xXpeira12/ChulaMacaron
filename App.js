import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./App/Screens/Dashboard"; // adjust the path according to your project structure
import Detail from "./App/Screens/Detail"; // adjust the path according to your project structure
import Home from "./App/Screens/Home";
import ReportScreen from "./App/Screens/ReportScreen";
import ProblemScreen from "./App/Screens/ProblemScreen";

const Stack = createStackNavigator();
// SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    chulaReg: require("./assets/fonts/CHULALONGKORNReg.otf"),
    chulaBold: require("./assets/fonts/CHULALONGKORNBold.otf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded){
  //     await SplashScreen.hideAsync();
  //   }
  // },[fontsLoaded]);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <TabNavigation /> */}
        <Stack.Navigator>
          <Stack.Screen name="ReportScreen" component={ReportScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ProblemScreen" component={ProblemScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
