import {
  ADD_DB
} from "../common/constants";
export const addDb = dbData => ({
  type: ADD_DB,
  payload: dbData
});

