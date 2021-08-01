export const ADD_NEW_INFO = "borderInfromation/addNewInfo";
export const ADD_NEW_INFO_FULLFILED = "borderInfromation/addNewInfoFullfilled";

export const addNewInfo = ({ borderID, data }) => ({ type: ADD_NEW_INFO, payload: { borderID, data } });
export const addNewInfoFullfilled = (info) => ({ type: ADD_NEW_INFO_FULLFILED, payload: info });
