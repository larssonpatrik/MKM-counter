import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

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

export function getGuestDataDB(
  setCountState1: Function,
  setCountState2: Function,
  setTimeState: Function
) {
  onValue(postListRef, (snapshot: any) => {
    const data: Data = snapshot.val();
    if (data !== null) {
      setCountState1(data.MEDA);
      setCountState2(data.plusOnes);
      setTimeState(data.time);
    }
  });
}

export function signInWithEmail(
  email: string,
  password: string,
  statusHandler: Function
) {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    statusHandler(error);
  });
}
