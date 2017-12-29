// Init inital state
var state_initial = {todos: []};

// Check if todos are already in the local storage?
if (localStorage.getItem('todos') !== null) {
  // Set todos from local storage to storage
  state_initial.todos = localStorage.getItem("todos").split(',');
} else {
  localStorage.setItem('todos');
}

export default function reducer(state= state_initial, action) {
  switch (action.type) {
    case "ADD_TODO": {
      // Store todos in local localStorage
      let local_todos = state.todos.concat(action.payload);
      localStorage.setItem('todos', local_todos);

      return Object.assign({}, state, {todos: local_todos});
    }
    case "REMOVE_TODO": {
      // Remove element from state todos via filter
      let filtered_todos = state.todos.filter((element, key) => {
        if (key != action.payload) {
          return element;
        }
      });

      // Store update in local localStorage
      localStorage.setItem('todos', filtered_todos);

      // Return updated todos
      return Object.assign({}, state, {todos: filtered_todos})
    }
  }
  return state;
}
