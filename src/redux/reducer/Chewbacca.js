import { SET_NOTE } from "../action/actionTypes.js";

import update from "immutability-helper";

const initialState = {
  note: null
}

export const items = (state = initialState, action) => {
  switch(action.type) {
    case SET_NOTE:
    return update(state, {
        note: { $set: action.payload },
      });
    default:
    return state;
  }
}
