export function addSearchTerm(term) {
  return {
    type: "ADD_SEARCH_TERM",
    payload: term,
  }
}
