import { ADD_PHONE, DELETE_PHONE, GET_PHONE, REST_PHONE } from "../action-type";
// 初始化数据，此数据用来存放 phone 所有数据
const MY_PHONE = {
  phone: []
}

export default function phone (state = MY_PHONE, action) {
  switch (action.type) {
    case ADD_PHONE:
      return addPhone(state, action)
    case DELETE_PHONE:
      return deletePhone(state, action)
    case GET_PHONE:
      return getPhone(state, action)
    case REST_PHONE:
      return restPhone(state, action)
    default:
      return state
  }
}

// 包含所有的action creator
// reduce的全部规则
//State 是只读的，唯一修改它的方式是 actions。
// 更新的唯一方式：dispatch(action) -> reducer -> new state。
// Reducer 函数必须是“纯”的 —— 不能修改它的参数，也不能有副作用（side effect）

function addPhone (state, action) {
    return {
      ...state,
      phone: [
        ...state.phone,
        action.data
      ]
    }
}

function deletePhone (state, action) {
  return state - 1
}

function getPhone (state, action) {
  return state.phone
}

function restPhone (state, action) {
  return {
    ...state,
    phone: []
  }
//  错误写法如下
//  state.phone = []
//   return state
}
