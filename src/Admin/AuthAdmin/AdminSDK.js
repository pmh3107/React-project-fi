// Khởi tạo Admin SDK
var admin = require("firebase-admin");

var serviceAccount = require("./project-uth-fi-firebase-adminsdk-y9dt6-1638936393.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-uth-fi-default-rtdb.firebaseio.com",
});
