import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ChapterLogin from "./ChapterLogin";
import LoginScreen from "./index";
import NormalLogin from "./NormalLogin";
// import { Stack } from "expo-router";
const Stack = createNativeStackNavigator();

// This is the main entry point for the app, which sets up the navigation stack
// and renders the initial screen. It uses React Navigation to manage the navigation

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ChapterLogin" component={ChapterLogin} />
      <Stack.Screen name="NormalLogin" component={NormalLogin} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
