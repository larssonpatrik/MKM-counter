import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

const postListRef = ref(db, "countData");

export function changeCountDB(medaCount: number, plusOnesCount: number) {
  const tmp = new Date();
  const time =
    tmp.getHours() +
    ":" +
    (tmp.getMinutes() < 10 ? "0" + tmp.getMinutes() : tmp.getMinutes());
  set(postListRef, {
    total: medaCount + plusOnesCount,
    MEDA: medaCount,
    plusOnes: plusOnesCount,
    time: time,
  });
}

type Data = { total: number; MEDA: number; plusOnes: number; time: string };
export function getCurrentCountDataDB(
  setCountState1: Function,
  setCountState2: Function
) {
  onValue(postListRef, (snapshot: any) => {
    const data: Data = snapshot.val();
    if (data !== null) {
      setCountState1(data.MEDA);
      setCountState2(data.plusOnes);
    }
  });
}
