import React from 'react';
import {connect} from 'react-redux';
import {addToDo, removeToDo} from '../actions/todosaction';
import {addSearchTerm} from '../actions/searchaction';


class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind this to elements
    this.addTodo = this.addTodo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  render() {
    // Generate the todos
    let todos = this.props.todos.map((todo, key) => {
      return <div id={key}>
          <p>{todo}</p>
          <a href="#" onClick={this.removeToDo} className="x-cross">x</a>
        </div>;
    });

    // Generate options for search_terms
    let searchterms = this.props.searchterms.map((term) => {
      return <option value={term}></option>;
    })

    return (
      <div>
        <div>
          <input tabindex="1" type="text" id="input-box" name="myToDo"
            onKeyDown={this.addTodo} list="searchterms"></input>
          <datalist id="searchterms">
            {searchterms}
          </datalist>
        </div>
        <div id="todo-flex-container">
          {todos}
        </div>
      </div>
    );
  }

  addTodo(e) {
    if (e.key == 'Enter') {
      this.props.dispatch(addToDo(e.target.value));

      // Add value to search terms
      this.props.dispatch(addSearchTerm(e.target.value));

      // Empty value
      e.target.value = "";
    }
  }

  removeToDo(e) {
    this.props.dispatch(removeToDo(e.target.parentElement.id));
  }
}

function mapStateToProps(store) {
  return {
    todos: store.todos.todos,
    searchterms: store.searchterms
  }
}

export default connect(mapStateToProps)(App);
