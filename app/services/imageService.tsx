// Returns a React Native Image source (user image or fallback)
export const getUserImageSrc = (imagePath) =>
  imagePath ? { uri: imagePath } : require("../assets/images/defaultUser.png");

// ---- helpers
const randomId = () => Math.random().toString(36).slice(2, 10);
const trimSlashes = (s = "") => String(s).replace(/^\/+|\/+$/g, "");
const inferExt = (fileUri, isImage = true) => {
  const m = String(fileUri || "").match(/\.(\w+)(?:[\?#]|$)/);
  return (m ? m[1] : isImage ? "jpg" : "bin").toLowerCase();
};

// Build a storage path like: folder/1692322331234-abc12345.jpg
export const getFilePath = (folderName, fileUri, isImage = true) => {
  const folder = trimSlashes(folderName || "misc");
  const ext = inferExt(fileUri, isImage);
  const stamp = Date.now();
  const id = randomId();
  return `${folder}/${stamp}-${id}.${ext}`;
};

// Stub upload function (returns the path; plug in your storage upload where noted)
export const uploadFile = async (folderName, fileUri, isImage = true) => {
  try {
    const path = getFilePath(folderName, fileUri, isImage);

    // TODO: actually upload with your provider (e.g., Firebase Storage)
    // Example:
    // import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
    // const storage = getStorage();
    // const storageRef = ref(storage, path);
    // const blob = await (await fetch(fileUri)).blob();
    // await uploadBytes(storageRef, blob);
    // const url = await getDownloadURL(storageRef);
    // return { success: true, path, url };

    return { success: true, path }; // remove this return once you wire the real upload
  } catch (error) {
    console.log("file upload error:", error);
    return { success: false, msg: "Could not upload media" };
  }
};
