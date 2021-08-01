import { ADD_NEW_INFO, ADD_NEW_INFO_FULLFILED } from "./actions";

const initialState = {
  borderID: null,
  entries: [],
  loading: false,
};

export const infos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_INFO:
      return { ...state, loading: true };

    case ADD_NEW_INFO_FULLFILED:
      return { ...state, entries: [...state.entries, action.payload], loading: false };

    default:
      return state;
  }
};
