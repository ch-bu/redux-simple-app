export default function reducer(state=[], action) {
  switch (action.type) {
    case "ADD_SEARCH_TERM": {

      if (state.includes(action.payload) == false) {
        // Add search term to list
        let search_terms = state.concat(action.payload);

        // Create new Object
        return search_terms;
      }

      return state;
    }
  }

  return state;
}
