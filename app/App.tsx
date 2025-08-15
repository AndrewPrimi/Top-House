import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ChapterLogin from "./ChapterLogin";
import LoginScreen from "./index";
import MainContainer from "./MainContainer";
import NormalLogin from "./NormalLogin";
import FrontPage from "./screens/FrontPage";
import HomeFeedViewer from "./screens/HomeFeedViewer";
import SearchTab from "./screens/SearchTab";
import Settings from "./screens/Settings";

// import { Stack } from "expo-router";
const Stack = createNativeStackNavigator();

// This is the main entry point for the app, which sets up the navigation stack
// and renders the initial screen. It uses React Navigation to manage the navigation

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ChapterLogin" component={ChapterLogin} />
      <Stack.Screen name="NormalLogin" component={NormalLogin} />
      <Stack.Screen name="HomeScreen" component={HomeFeedViewer} />
      <Stack.Screen
        name="Main"
        component={MainContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="/SearchTab/:schools" component={SearchTab} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="FrontPage" component={FrontPage} />
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
