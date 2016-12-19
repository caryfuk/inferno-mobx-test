import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from "inferno-mobx";
import Logo from './logo';
import './App.css';

class App extends Component {
  render({store}) {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          edit new entry:
          <input
            onKeyUp={
              () => {
                if (event.code === 'Enter') {
                  store.addTodo(event.target.value);
                  event.target.value=''
                }
              }
            } />
        </p>
        <p>store:</p>
        <ul>
          {store.todos.map(
            (todo, idx) =>
              <li
                key={idx}
                onClick={() => {todo.completed = true}}
                style={todo.completed ? 'color: #0f0' : ''}>
                  {todo.task}
            </li>
          )}
        </ul>
        <p>completed todos: {store.completedTodosCount}</p>
        <p>computed: {store.report}</p>
      </div>
    );
  }
}

export default connect(['store'])(App);
