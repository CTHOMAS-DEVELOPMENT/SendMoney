import {
  ADD_DB, UPDATE_GIFTS, UPDATE_VIEW
} from "../common/constants"
export const addDb = dbData => ({
  type: ADD_DB,
  payload: dbData
})
export const updateGifts = gift => ({
  type: UPDATE_GIFTS,
  payload: gift
})
export const updateView = (vw,gifts,accounts) => {
  return {
  type: UPDATE_VIEW,
  payload: {view:vw, gifts:gifts, accounts:accounts}
  }
}
