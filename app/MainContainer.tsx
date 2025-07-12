import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens

import homeFeedViewer from "./screens/HomeFeedViewer";
import profile from "./screens/ProfileTab";
import savedEvents from "./screens/SavedEventsTab";
import searchTab from "./screens/SearchTab";

// Screen Names
const SearchTab = "Search";
const ProfileTab = "Profile";
const SavedEventTab = "Saved";
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
            } else if (rn === SavedEventTab) {
              iconName = focused ? "bookmark" : "bookmark-outline";
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
      <Tab.Screen name={SavedEventTab} component={savedEvents} />
      <Tab.Screen name={SearchTab} component={searchTab} />
    </Tab.Navigator>
  );
}
