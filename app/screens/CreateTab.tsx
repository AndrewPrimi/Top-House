import { ResizeMode, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import RichTextEditor from "../components/RichTextEditor";

export default function CreateTab() {
  const bodyRef = useRef("");
  const editorRef = useRef(null);
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState(file);

  const onPick = async (isImage) => {
    let mediaConfig = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3] as [number, number],
      quality: 0.7,
    };
    if (!isImage) {
      mediaConfig = {
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3] as [number, number],
        quality: 0.7,
      };
    }
    let result = await ImagePicker.launchImageLibraryAsync(mediaConfig);

    if (!result.canceled) {
      setFile(result.assets[0]);
    }
  };

  const isLocalFile = (file) => {
    if (!file) return null;
    if (typeof file == "object") return true;
  };

  const getFileType = (file) => {
    if (!file) return null;

    if (typeof file === "object" && file.type) {
      return file.type; // from ImagePicker
    }

    if (typeof file === "string") {
      if (file.includes("postImage") || file.endsWith(".jpg")) return "image";
      if (file.includes("video") || file.endsWith(".mp4")) return "video";
    }

    return null;
  };

  const getFileUri = (file) => {
    if (!file) return null;
    if (isLocalFile(file)) {
      return file.uri;
    }
  };

  const onSubmit = async () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={style.title}>Create Post</Text>
      </View>

      {/* Flex container for scroll and button */}
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.header}>
            <Text> Spot for user avatar</Text>
            <Text> Spot for user name</Text>
          </View>

          <View style={style.textEditor}>
            <RichTextEditor
              editorRef={editorRef}
              onChange={(body) => (bodyRef.current = body)}
            />
          </View>
          {file && (
            <View style={{ alignItems: "center" }}>
              {getFileType(file) === "video" ? (
                <View style={{ width: 350, height: 250, position: "relative" }}>
                  <Video
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    source={{ uri: getFileUri(file) }}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                    isLooping
                  />
                  <Pressable
                    onPress={() => setFile(null)}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "red",
                      borderRadius: 15,
                      padding: 6,
                      zIndex: 10,
                    }}
                  >
                    <Ionicons name="trash" size={20} color="white" />
                  </Pressable>
                </View>
              ) : (
                <View style={{ width: 350, height: 250, position: "relative" }}>
                  <Image
                    source={{ uri: getFileUri(file) }}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                  <Pressable
                    onPress={() => setFile(null)}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "red",
                      borderRadius: 15,
                      padding: 6,
                      zIndex: 10,
                    }}
                  >
                    <Ionicons name="trash" size={20} color="white" />
                  </Pressable>
                </View>
              )}
            </View>
          )}

          <View style={style.media}>
            <Text style={style.addImageText}> Add to your post </Text>
            <View style={style.mediaIcons}>
              <TouchableOpacity onPress={() => onPick(true)}>
                <Ionicons name="image" color={"black"} size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPick(false)}>
                <Ionicons name="videocam" color={"black"} size={33} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Fixed post button at the bottom */}
        <TouchableOpacity onPress={onSubmit} style={style.button}>
          <Text style={{ fontFamily: "inter", fontWeight: "bold" }}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 27,
    fontFamily: "inter",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: 8,
    gap: 15,
  },
  header: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  textEditor: {},
  addImageText: {},
  media: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 20,
    borderColor: "#D3D3D3",
  },
  mediaIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: "rgba(152, 251, 152, 1)",
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  file: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderCurve: "continuous",
  },
  trashcan: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "red",
    borderRadius: 15,
    padding: 6,
    zIndex: 2,
  },
});
