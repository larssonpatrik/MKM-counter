import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

const postListRef = ref(db, "countData");

export function changeCountDB(count1, count2) {
  const tmp = new Date();
  const time = tmp.getHours() + ":" + tmp.getMinutes();
  set(postListRef, {
    total: count1 + count2,
    MEDA: count1,
    plusOnes: count2,
    time: time,
  });
}
