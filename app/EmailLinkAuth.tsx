export const actionCodeSettings = {
  url: "https://top-house-dd9ed.web.app/emailSignIn",
  handleCodeInApp: true,
  iOS: { bundleId: "com.tophouse.myapp" }, // must match your real bundle id
  android: {
    packageName: "com.tophouse.myapp", // must match your real package
    installApp: true,
    // minimumVersion: '12', // optional; remove if you’re not sure
  },
};
