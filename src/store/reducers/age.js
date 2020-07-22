import { ADD_NAME,ADD_AGE, LOSE_AGE } from "../action-type";

export default function age (state = 0, action) {
  switch (action.type) {
    case ADD_NAME:
      return addNameCreater(state, action)
    case ADD_AGE:
      return addAgeCreater(state, action)
    case LOSE_AGE:
      return LoseAgeCreater(state, action)
    default:
      return state
  }
}

//包含所有的action creator
function addNameCreater (state, action) {
  return{
    ...state,
    ...action.data
  }
}

function addAgeCreater (state, action) {
  // console.log(state, action)
  return state + 1
}

function LoseAgeCreater (state, action) {
  return state - 1
}

