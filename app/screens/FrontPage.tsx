import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

const Page = () => {
  const router = useRouter();
};

const FrontPage = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/frontparty.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      />
      <Text>FrontPage</Text>
    </View>
  );
};

export default FrontPage;
