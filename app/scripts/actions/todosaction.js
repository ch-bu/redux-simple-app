export function addToDo(todo) {
  return {
    type: "ADD_TODO",
    payload: todo,
  }
}

export function removeToDo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id
  }
}
