export default function reducer(state={}, action) {
  switch (action.type) {
    case "GET_TWEETS": {
      return {...state, todos: action.payload}
    }
  }
  return state;
}
