import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { Observable } from "rxjs";

export const setDocument = (collectionPath, data) => {
  const db = getFirestore();

  return new Observable((observer) => {
    addDoc(collection(db, collectionPath), data)
      .then((docRef) => observer.next(docRef))
      .catch((error) => observer.error(error))
      .finally(() => observer.complete());
  });
};

export const getDocuments = (collectionPath, constraints) => {
  const db = getFirestore();

  const dbCollection = collection(db, collectionPath);
  const q = constraints ? query(dbCollection, constraints) : dbCollection;

  return new Observable((observer) => {
    getDocs(q)
      .then((snapshot) => {
        observer.next(snapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => observer.error(error))
      .finally(() => observer.complete());
  });
};
