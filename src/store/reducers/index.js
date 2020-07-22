import { combineReducers } from 'redux'
import age from './age'
import phone from './phone'
import toDo from './toDo'

export default combineReducers({
  age,
  phone,
  toDo
})
