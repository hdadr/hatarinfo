import { SWAP_SELECTED_COUNTRIES, UPDATE_COUNTRY_FROM, UPDATE_COUNTRY_TO } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COUNTRY_FROM:
      return {
        ...state,
        selectedCountries: {
          from: action.payload,
          to: findFirstNeighbourCountry(state, action),
        },
      };
    case UPDATE_COUNTRY_TO:
      return { ...state, selectedCountries: { ...state.selectedCountries, to: action.payload } };
    case SWAP_SELECTED_COUNTRIES:
      return { ...state, selectedCountries: { from: state.selectedCountries.to, to: state.selectedCountries.from } };
    default:
      return state;
  }
};

function findFirstNeighbourCountry(state, action) {
  return state.countries.find((country) => action.payload.neighbours.includes(country.code));
}
