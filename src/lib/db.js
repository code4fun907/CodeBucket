import firebase from "./firebase";

const firestore = firebase.firestore();

const createUser = (uid, data) =>
  firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });

export default {
  createUser,
};
