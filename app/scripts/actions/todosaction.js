export function getTweets() {
  return {
    type: "GET_TWEETS",
    payload: [1, 2, 3],
  }
}

export function addToDo(number) {
  return {
    type: "ADD_TODO",
    payload: number,
  }
}
