export const UPDATE_COUNTRY_FROM = "countrySelector/updateCountryFrom";
export const UPDATE_COUNTRY_TO = "countrySelector/updateCountryTo";
export const SWAP_SELECTED_COUNTRIES = "countrySelector/swapSelectedCountries";
export const SET_SELECTED_BORDER = "borderList/setSelectedBorder";

export const updateCountryFrom = (value) => ({ type: UPDATE_COUNTRY_FROM, payload: value });
export const updateCountryTo = (value) => ({ type: UPDATE_COUNTRY_TO, payload: value });
export const swapSelectedCountries = () => ({ type: SWAP_SELECTED_COUNTRIES });
export const setSelectedBorder = (value) => ({ type: SET_SELECTED_BORDER, payload: value });
