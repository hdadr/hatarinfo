import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Observable } from "rxjs";

export const useFirestore = () => {
  const db = getFirestore();

  const setDocument = (collectionPath, data) => {
    return new Observable((observer) => {
      addDoc(collection(db, collectionPath), data)
        .then((docRef) => observer.next(docRef))
        .catch((error) => observer.error(error))
        .finally(() => observer.complete());
    });
  };

  const getDocuments = (collectionPath, constraints) => {
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

  return [getDocuments, setDocument];
};
