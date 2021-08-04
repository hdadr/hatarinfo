import { createStore, applyMiddleware, combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { countries, selectedCountries } from "./countries";
import { selectedBorder } from "./border";
import { infos } from "./infos";
import { device } from "./device";
import { addNewInfoEpic, deleteInfoEpic, loadInfosEpic, reportInfoEpic } from "./infos/epics";

const rootReducer = combineReducers({ countries, selectedCountries, selectedBorder, device, infos });
const rootEpic = combineEpics(addNewInfoEpic, loadInfosEpic, deleteInfoEpic, reportInfoEpic);

const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
