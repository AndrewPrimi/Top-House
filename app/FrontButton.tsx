import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  onPress: () => void;
};
const FrontButton = ({ title, onPress }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });
  const [count, setCount] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ fontFamily: "Inter_600SemiBold", textAlign: "center" }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "rgba(130, 130, 130, 1)",
    marginTop: 60,
    alignItems: "center",
    padding: 50,
    height: 140,
    width: 250,
  },
});

export default FrontButton;
