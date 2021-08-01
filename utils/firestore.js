import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { from, Observable } from "rxjs";

export const setDocument = (collectionPath, data) => {
  const db = getFirestore();
  return from(addDoc(collection(db, collectionPath), data));
};

export const getDocuments = (collectionPath, constraints) => {
  const db = getFirestore();

  const dbCollection = collection(db, collectionPath);
  const q = constraints ? query(dbCollection, constraints) : dbCollection;
  return from(getDocs(q));
};
