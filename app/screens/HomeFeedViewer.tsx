import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const router = useRouter();
const HomeFeed = () => {
  const { top: safeTop } = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: safeTop,
        paddingRight: 20,
      }}
    >
      <Image
        source={require("../../assets/images/Top_House_Logo.png")}
        style={{ width: 70, height: 70, paddingLeft: 10 }}
      />
      <TouchableOpacity onPress={() => {}}>
        <Ionicons
          onPress={() => router.push("../screens/Settings")}
          name="settings-outline"
          size={30}
          color={Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeFeed;

const style = {
  Text: {
    fontFamily: "inter",
    marginTop: 20,
    fontSize: 20,
  },
};
