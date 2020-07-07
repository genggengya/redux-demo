import { ADD_NAME,ADD_AGE, LOSE_AGE } from "../action-type";

//包含所有的action creator
export const addNameCreater = (name) => {
  return dispatch => {
    dispatch({type:ADD_NAME, data: name})
  }
}

export const addAgeCreater = (age) => {
  return dispatch => {
    dispatch({type:ADD_AGE, data: age})
  }
}

export const LoseAgeCreater = (age) => {
  return dispatch => {
    dispatch({type:LOSE_AGE, data: age})
  }
}

