import { Inter_600SemiBold } from "@expo-google-fonts/inter/600SemiBold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import { useRouter } from "expo-router";
import FrontPage from "./screens/FrontPage";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });
  const router = useRouter();
  return <FrontPage />;
}
