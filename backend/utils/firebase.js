const admin = require("firebase-admin");
const fs    = require("fs");
const path  = require("path");

const serviceAccount = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "serviceAccountKey.json"), 
    "utf-8"
  )
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { db };
