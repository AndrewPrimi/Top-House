import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import FrontButton from "./FrontButton";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });
  const router = useRouter();
  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <Text style={style.title}>Top-House</Text>
      <Text style={style.underTitle}> Connecting Chapters</Text>
      <Text style={[style.title, { fontSize: 26 }]}> Account Type Options</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20 }}
      >
        <TextInput style={style.emailOutline} value="Email@domain.com" />
        <Image
          source={require("../assets/images/image.png")}
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            left: 270,
            top: 40,
          }}
        />
      </View>
      <FrontButton
        onPress={() => router.replace("/ChapterLogin")}
        title="Join Your Chapter!"
      />
      <FrontButton
        onPress={() => router.replace("/NormalLogin")}
        title="Not Part of a Greek Organization"
      />
    </SafeAreaView>
  );
}

const style = {
  title: {
    marginTop: 50,
    fontFamily: "Inter_600SemiBold",
    fontSize: 32,
    marginBottom: 2,
  },
  underTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 24,
  },
  emailOutline: {
    marginTop: 40,
    borderWidth: 2,
    borderColor: "rgba(218, 218, 218, 1)",
    color: "rgba(130, 130, 130, 1)",
    borderRadius: 8,
    padding: 10,
    width: 300,
  },
};
