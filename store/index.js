import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { countries, selectedCountries } from "./countries";
import { selectedBorder } from "./border";

const rootReducer = combineReducers({ countries, selectedCountries, selectedBorder });

const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
