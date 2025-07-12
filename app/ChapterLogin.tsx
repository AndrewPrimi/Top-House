import { useRouter } from "expo-router";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { Button, Image, SafeAreaView, TextInput, View } from "react-native";
import { db } from "./firebaseConfig";

const router = useRouter();
const ChapterLogin = () => {
  const [name, setName] = useState("Name");
  const [lastName, setLastName] = useState("Last Name");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [code, setCode] = useState("Chapter Code");

  function login() {
    //maye later use async
    //const newKey = push(child(ref(database),'user')).key;
    set(ref(db, "users/" + name), {
      username: name,
      email: email,
      password: password,
      code: code,
    });
    router.replace("/screens/AfterLoginScreen");
  }

  return (
    <>
      <SafeAreaView style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/Top_House_Logo.png")}
          style={{ width: 90, height: 90, paddingLeft: 10 }}
        />
      </SafeAreaView>

      <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
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
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={style.Element}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          style={style.Element}
        />
        <TextInput style={style.Element}>
          {" "}
          Place holder for entering password again{" "}
        </TextInput>
        <TextInput onChangeText={setCode} value={code} style={style.Element} />
        <View
          style={{ width: 350, backgroundColor: "dodgerblue", borderRadius: 6 }}
        >
          <Button onPress={login} title="Login In" color="white" />
        </View>
      </SafeAreaView>
    </>
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

export default ChapterLogin;
