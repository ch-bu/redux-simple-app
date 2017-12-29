export default function reducer(state={todos: []}, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return Object.assign({}, state, {todos: state.todos.concat(action.payload)});
    }
    case "REMOVE_TODO": {
      console.log('remove');
      return Object.assign({}, state, {todos: [1, 2, 3]})
    }
  }
  return state;
}
