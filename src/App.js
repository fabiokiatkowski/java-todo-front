import React, { Component } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import RefreshButton from './components/RefreshButton'
import './App.css';

class App extends Component {
  state = {
    todos: []
  };
  
  componentDidMount() {
    fetch("http://localhost:8080/api/todo")
    .then(response => response.json())
    .then(data => this.setState({todos: data}))
  }

  onRefreshHandler = (event) => {
    fetch("http://localhost:8080/api/todo")
    .then(response => response.json())
    .then(data => this.setState({todos: data}))
  }

  onSubmitHanlder = (event, submitState) => {
    event.preventDefault();
    const config = {
      method: "POST",
      body: JSON.stringify(submitState),
      headers: {
        "Content-Type":"application/json"
      }
    }
    fetch("http://localhost:8080/api/todo/",config)
    .then(response => response.json())
    .then(data => {
      const savedTodos = [...this.state.todos]
      savedTodos.push(data)
      this.setState({todos: savedTodos})
    })
  }


  onCheckboxChangeHandler = (event, todo) => {
    const changedItem = this.state.todos.findIndex(i => i.id === todo.id);
    const savedTodos = [...this.state.todos]
    const todoObj = savedTodos[changedItem]
    todoObj.done = !todo.done
    const config = {
      method: "PUT",
      body: JSON.stringify(todoObj),
      headers: {
        "Content-Type":"application/json"
      }
    }
    fetch(`http://localhost:8080/api/todo/${todo.id}`,config)
    .then(response => response.json())
    .then(data => {
      const changedItem = this.state.todos.findIndex(i => i.id === todo.id);
      const savedTodos = [...this.state.todos]
      savedTodos[changedItem].done = data.done
      this.setState({todos: savedTodos})
    })
  }

  onRemoveHandler = (event, todo) => {
    fetch(`http://localhost:8080/api/todo/${todo.id}`, {method: "DELETE"})
    .then(response => {
      const changedItem = this.state.todos.findIndex(i => i.id === todo.id);
      const savedTodos = [...this.state.todos]
      savedTodos.splice(changedItem, 1)
      this.setState({todos: savedTodos})
    })
  }

  render() {
    const rt = (
      <div className="displayGrid">
        {this.state.todos.map((todo, index) => {
          return <Todo
                    todoItem={todo}
                    key={todo.id}
                    onDoneClick={(event) => this.onCheckboxChangeHandler(event, todo)}
                    onRemoveClick={(event) => this.onRemoveHandler(event, todo)}
                  />
        })}
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <RefreshButton onRefreshClick={this.onRefreshHandler.bind(this)}/>
          <h1 className="App-title">Todo List to Supero Test</h1>
          <AddTodo onSubmitHanlder={this.onSubmitHanlder}/>
        </header>
        <div className="App-intro">
          {rt}
        </div>
      </div>
    );
  }
}

export default App;
