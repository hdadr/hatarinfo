import { SET_SELECTED_BORDER } from "./actions";

export const selectedBorder = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_BORDER:
      return action.payload;
    default:
      return state;
  }
};
