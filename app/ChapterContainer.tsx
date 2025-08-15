import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens

import CreateTab from "./screens/CreateTab";
import homeFeedViewer from "./screens/HomeFeedViewer";
import profile from "./screens/ProfileTab";
import searchTab from "./screens/SearchTab";

// Screen Names
const SearchTab = "Search";
const ProfileTab = "Profile";
const Create = "Create";
const Home = "Home";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({ route }) => {
        let iconName = "";
        const rn = route.name;

        // Note: 'focused' is only available inside tabBarIcon, so move logic there
        return {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (rn === Home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === ProfileTab) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === Create) {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (rn === SearchTab) {
              iconName = focused ? "search" : "search-outline";
            }
            // Replace the following with your icon component, e.g. Ionicons
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen name={Home} component={homeFeedViewer} />
      <Tab.Screen name={ProfileTab} component={profile} />
      <Tab.Screen name={Create} component={CreateTab} />
      <Tab.Screen name={SearchTab} component={searchTab} />
    </Tab.Navigator>
  );
}
