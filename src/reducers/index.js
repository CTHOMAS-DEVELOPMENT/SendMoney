import {
  ADD_DB
} from "../common/constants";
const initialState = {
  gifts: [],
  accounts: []
};
//Add get total remaining reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DB:
      return { ...state, gifts: Object.entries(action.payload.gifts), accounts:action.payload.accounts };
    default:
      return state;
  }
};
export default rootReducer;