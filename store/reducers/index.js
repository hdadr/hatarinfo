import { countries, selectedCountries } from "./countries";
import { selectedBorder } from "./border";
import { combineReducers } from "redux";

export const reducer = combineReducers({ countries, selectedCountries, selectedBorder });
