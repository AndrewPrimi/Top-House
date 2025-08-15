import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

export default function SignUpChapter() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text> will eventually be sign up screen</Text>

      <TouchableOpacity
        onPress={() => router.push(`/screens/ChapterMainScreen`)}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Temporary Button to chapter main screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
