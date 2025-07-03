import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      <Stack />
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}
