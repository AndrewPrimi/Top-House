import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  validatePassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { auth, db } from "./firebaseConfig";

const router = useRouter();
const ChapterLogin = () => {
  const [name, setName] = useState("Name");
  const [lastName, setLastName] = useState("Last Name");
  const [email, setEmail] = useState("Email");
  const [phonenum, setPhoneNum] = useState("Phone Number");
  const [password, setPassword] = useState("Password");
  const [code, setCode] = useState("Chapter Code");

  async function signup() {
    const status = await validatePassword(getAuth(), password);
    if (!status.isValid) {
      if (status.containsUppercaseLetter === false) {
        alert("Password must contain uppercase letter");
        return;
      }
      if (status.containsNonAlphanumericCharacter === false) {
        alert("password must contain a special character");
        return;
      }
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;
        await sendEmailVerification(user);
      }
    );
    set(ref(db, "users/" + name), {
      username: name,
      email: email,
      phonenumber: phonenum,
      password: password,
      code: code,
    })
      .then(() => {
        console.log("User data saved successfully!");
      })
      .catch(() => {
        console.error("Error saving user data:", "Did not work");
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
        <ScrollView>
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
            onChangeText={setPhoneNum}
            value={phonenum}
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
          <TextInput
            onChangeText={setCode}
            value={code}
            style={style.Element}
          />
          <View
            style={{
              width: 350,
              backgroundColor: "dodgerblue",
              borderRadius: 6,
            }}
          >
            <Button onPress={signup} title="Sign Up" color="white" />
          </View>
        </ScrollView>
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
