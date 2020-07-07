import { ADD_PHONE, DELETE_PHONE, GET_PHONE, REST_PHONE } from "../action-type";

//包含所有的action creator
export const addPhone = (phone) => {
  return dispatch => {
    dispatch({type:ADD_PHONE, data: phone})
  }
}

export const deletePhone = (phone) => {
  return dispatch => {
    dispatch({type:DELETE_PHONE, data: phone})
  }
}

export const getPhone = (phone) => {
  return dispatch => {
    dispatch({type:GET_PHONE, data: phone})
  }
}
export const restPhone = () => {
  return dispatch => {
    dispatch({type:REST_PHONE, data: {}})
  }
}
