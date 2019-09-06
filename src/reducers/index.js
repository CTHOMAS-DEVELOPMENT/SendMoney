import {
  ADD_DB, UPDATE_GIFTS, UPDATE_VIEW
} from "../common/constants";
export const initialState = {
  gifts: [],
  accounts: [],
  view: "Full View"
};
//Add get total remaining reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DB:
      //Used once reducer-Filters out Chrome Firebase keys
      let arrayFromObject=Object.entries(action.payload.gifts)
      let result=arrayFromObject.map(gift=> gift[1])     
      return { ...state, gifts: result, accounts:action.payload.accounts, view:"" };
      case UPDATE_GIFTS:
        return { 
          ...state,
          gifts: [...state.gifts, action.payload]
      }
      case UPDATE_VIEW:
        return { state, view: action.payload.view, gifts: action.payload.gifts, accounts:action.payload.accounts }
      default:
        return state;
  }
};
export default rootReducer;