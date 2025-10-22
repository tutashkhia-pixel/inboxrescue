const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

function saveUserTokens(userId, tokens) {
  return admin
    .database()
    .ref(`users/${userId}/tokens`)
    .set(tokens);
}

function getUserTokens(userId) {
  return admin
    .database()
    .ref(`users/${userId}/tokens`)
    .once('value')
    .then((snapshot) => snapshot.val());
}

module.exports = {
  admin,
  saveUserTokens,
  getUserTokens,
};
