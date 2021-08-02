import { ADD_NEW_INFO, ADD_NEW_INFO_FULLFILED, LOAD_INFORMATIONS, LOAD_INFORMATIONS_FULLFILLD, UNSET_INFORMATIONS } from "./actions";

const initialState = {
  entries: [],
  loading: false,
};

export const infos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_INFO:
      return { ...state, loading: true };

    case ADD_NEW_INFO_FULLFILED:
      return { entries: [...state.entries, action.payload], loading: false };

    case LOAD_INFORMATIONS:
      return { ...state, loading: true };

    case LOAD_INFORMATIONS_FULLFILLD:
      return { entries: [...action.payload], loading: false };

    case UNSET_INFORMATIONS: {
      return { ...state, entries: [] };
    }

    default:
      return state;
  }
};
