import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST } from '../action-type'

export const getToDoList = (type) => {
  return ((dispatch) => dispatch({ type: GET_TODO_LIST, data: type }))
}
export const addToDoList = (newToDo) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODO_LIST, data: newToDo })
    return Promise.resolve()
  }
}
export const deleteToDoList = (index) => {
  return (
    (dispatch) => {
      dispatch({ type: DELETE_TODO_LIST, data: index })
      return Promise.resolve()
    }
  )
}
