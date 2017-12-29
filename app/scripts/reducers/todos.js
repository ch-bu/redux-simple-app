export default function reducer(state={todos: []}, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return Object.assign({}, state, {todos: state.todos.concat(action.payload)});
    }
  }
  return state;
}
