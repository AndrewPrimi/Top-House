import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
function SearchTab() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (value: string) => {
    fetch(`http://universities.hipolabs.com/search?name=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const search = json.filter((item: any) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResult(search);
        console.log("Filtered results:", search);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  const SearchResultsList = () => {
    const router = useRouter();
    return (
      <View style={{ maxHeight: 600 }}>
        <ScrollView>
          {result.slice(0, 25).map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                router.push(`/screens/${encodeURIComponent(item.name)}`)
              }
            >
              <Text style={style.resultList} key={index}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={style.title}>Search</Text>
      <View style={style.searchBar}>
        <Ionicons name="search-outline" size={20} color={"grey"} />
        <TextInput
          style={style.searchTxt}
          placeholderTextColor={"grey"}
          placeholder="search"
          autoCapitalize="none"
          value={input}
          onChangeText={(value) => handleChange(value)}
        />
      </View>
      <SearchResultsList />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "black",
    fontFamily: "Avenir-Heavy",
    paddingLeft: 20,
    paddingTop: 10,
  },
  searchBar: {
    backgroundColor: "#E4E4E4",
    marginHorizontal: 23,
    paddingLeft: 20,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
  searchTxt: {
    fontSize: 14,
    flex: 1,
    color: "grey",
  },
  resultList: {
    width: "100%",
    flexDirection: "column",
    borderRadius: 5,
    marginLeft: 5,
    marginHorizontal: 23,
    marginTop: 10,
    maxHeight: 300,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
  },
});

export default SearchTab;
