import { useLocalSearchParams, useRouter } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SchoolPage() {
  const { name } = useLocalSearchParams();

  const Save = () => {
    const Router = useRouter();
    return (
      <TouchableOpacity>
        <Ionicons
          name="bookmark-outline"
          size={30}
          onPress={() => Router.push(`/screens/SavedEventsTab`)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 20, flexDirection: "row" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", flex: 1 }}>
          {Array.isArray(name)
            ? decodeURIComponent(name[0])
            : decodeURIComponent(name || "")}
        </Text>
        <Save />
      </View>
      <Text style={[style.Text, { paddingTop: 10 }]}> Fraternities </Text>
      <Text style={[style.Text, { paddingTop: 250 }]}> Soroities </Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Text: {
    fontSize: 22,
    fontFamily: "Avenir-Heavy",
  },
});
