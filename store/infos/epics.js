import { ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs";
import { ADD_NEW_INFO, addNewInfoFullfilled } from "./actions";
import { setDocument } from "../../utils/firestore";

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
