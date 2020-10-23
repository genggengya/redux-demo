import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST } from '../action-type'

const initialState = {
  toDo: []
}

export default function toDo (state = initialState, action) {
  switch (action.type) {
    case GET_TODO_LIST:
      return getToDoList(state, action.data)
    case ADD_TODO_LIST:
      return addToDoList(state, action.data)
    case DELETE_TODO_LIST:
      return deleteToDoList(state, action.data)
    case UPDATE_TODO_LIST:
      return updateToDoList(state, action.data)
    default:
      return state
  }
}

function updateToDoList(state, { name, types }) {
  let newToDo = state.toDo
  let index = newToDo.findIndex(item => item.name === name)
  newToDo[index].type = types
  return  {
    ...state,
    toDo: [...newToDo]
  }
}

function getToDoList(state) {
  return state
}
function addToDoList(state, newToDo) {
  return {
    ...state,
    toDo: [...state.toDo, newToDo]
  }
}
function deleteToDoList(state, index) {
  state.toDo.splice(index, 1)
  let newToDo = state.toDo.filter(Boolean)
  return  {
    ...state,
    toDo: newToDo
  }
}
