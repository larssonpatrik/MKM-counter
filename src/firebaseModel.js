import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

const postListRef = ref(db, "count");

export function changeCountDB(info) {
  set(postListRef, info);
}
