import { ofType } from "redux-observable";
import { catchError, map, switchMap, tap } from "rxjs";
import {
  ADD_NEW_INFO,
  addNewInfoFullfilled,
  LOAD_INFORMATIONS,
  loadInformationsFullFilled,
  DELETE_INFORMATION,
  deleteInformationFullFilled,
} from "./actions";
import { setDocument, getDocuments, updateDocument } from "../../utils/firestore";
import { where } from "firebase/firestore";

const sixHoursInMillisecs = 6 * 10 * 60 * 1000;

export const addNewInfoEpic = (action$) =>
  action$.pipe(
    ofType(ADD_NEW_INFO),
    switchMap((action) =>
      setDocument(`borders/${action.payload.borderID}/infos`, action.payload.data).pipe(
        map((docRef) => addNewInfoFullfilled({ ...action.payload.data, id: docRef.id })),
        catchError((error) => {
          // TODO
        })
      )
    )
  );

export const loadInfosEpic = (action$) =>
  action$.pipe(
    ofType(LOAD_INFORMATIONS),
    switchMap((action) => {
      const notOlderThanSixHours = where("datetime", ">=", Date.now() - sixHoursInMillisecs);

      return getDocuments(`borders/${action.payload.borderID}/infos`, notOlderThanSixHours).pipe(
        map((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.ref.id }))),
        map((entries) => loadInformationsFullFilled(entries)),
        catchError((error) => {
          // TODO
        })
      );
    })
  );

export const deleteInfoEpic = (action$) =>
  action$.pipe(
    ofType(DELETE_INFORMATION),
    switchMap((action) => {
      return updateDocument(`borders/${action.payload.borderID}/infos`, action.payload.infoID, { status: "inActive" }).pipe(
        map(() => deleteInformationFullFilled(action.payload.infoID)),
        catchError((error) => {
          // TODO
        })
      );
    })
  );
