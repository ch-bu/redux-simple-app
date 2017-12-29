import React from 'react';
import {connect} from 'react-redux';
import {addToDo, removeToDo} from '../actions/todosaction';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  render() {
    console.log(this.props);

    let todos = this.props.todos.map((todo) => {
      return <li>{todo}</li>;
    });

    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <button onClick={this.removeToDo}>Remove todo</button>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }

  addTodo() {
    this.props.dispatch(addToDo(5));
  }

  removeToDo() {
    // console.log(removeToDo);
    this.props.dispatch(removeToDo(5));
  }
}

function mapStateToProps(store) {
  return {
    todos: store.todos.todos
  }
}

export default connect(mapStateToProps)(App);
