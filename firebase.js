const admin = require("firebase-admin");

if (!process.env.FIREBASE_KEY) {
  console.error("<:error_g:1561271715164721245> FIREBASE_KEY environment variable missing!");
  process.exit(1);
}

let serviceAccount;

try {
  serviceAccount = JSON.parse(process.env.FIREBASE_KEY);
  console.log("<:success_g:1561271843346714777> Firebase key loaded");
} catch (error) {
  console.error("<:error_g:1561271715164721245> Firebase JSON parsing failed:", error.message);
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

console.log("<:success_g:1561271843346714777> Firebase connected");

module.exports = db;
module.exports.db = db;
