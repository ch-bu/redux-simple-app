// Init inital state
var state_initial = {todos: []};

export default function reducer(state= state_initial, action) {
  switch (action.type) {
    case "ADD_TODO": {
      // Store todos in local localStorage
      let local_todos = state.todos.concat(action.payload);

      return Object.assign({}, state, {todos: local_todos});
    }
    case "REMOVE_TODO": {
      // Remove element from state todos via filter
      let filtered_todos = state.todos.filter((element, key) => {
        if (key != action.payload) {
          return element;
        }
      });

      // Return updated todos
      return Object.assign({}, state, {todos: filtered_todos})
    }
  }
  return state;
}
