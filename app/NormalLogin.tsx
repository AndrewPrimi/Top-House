import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";

const NormalLogin = () => {
  const [name, setName] = useState("Name");
  const [lastName, setLastName] = useState("Last Name");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [school, setSchool] = useState("University Name");

  const router = useRouter();

  const login = () => {
    router.replace("/screens/AfterLoginScreen");
  };
  return (
    <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
      <Text>ChapterLogin (input logo here) </Text>
      <TextInput
        onChangeText={setName}
        value={name}
        style={[style.Element, { marginTop: 40 }]}
      />
      <TextInput
        onChangeText={setLastName}
        value={lastName}
        style={style.Element}
      />
      <TextInput onChangeText={setEmail} value={email} style={style.Element} />
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={style.Element}
      />
      <TextInput style={style.Element}>
        {" "}
        Place holder for entering password again{" "}
      </TextInput>
      <TextInput
        onChangeText={setSchool}
        value={school}
        style={style.Element}
      />
      <View
        style={{ width: 350, backgroundColor: "dodgerblue", borderRadius: 6 }}
      >
        <Button title="Login In" color="white" onPress={login} />
      </View>
    </SafeAreaView>
  );
};

const style = {
  Element: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "rgba(218, 218, 218, 1)",
    color: "rgba(130, 130, 130, 1)",
    borderRadius: 8,
    padding: 10,
    width: 350,
  },
};

export default NormalLogin;
