import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

const router = useRouter();
const FrontPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/FratHouse.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={style.overlay} />

        <Text style={style.title}>Top House</Text>

        <SafeAreaView
          style={{ flex: 1, justifyContent: "flex-end", marginVertical: 60 }}
        >
          <TouchableOpacity
            style={style.btn}
            onPress={() => router.push("/ChapterLogin")}
          >
            <Animated.Text style={style.btnText}>
              Join Your Chapter
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btn}
            onPress={() => router.push("/NormalLogin")}
          >
            <Animated.Text style={style.btnText}>Login</Animated.Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push(`/screens/SignUpChapter`)}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login your Chapter
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 45,
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: "center",
    paddingTop: 360,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 12,
  },
  btnText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust 0.4 to desired darkness
    zIndex: 0,
  },
});

export default FrontPage;
