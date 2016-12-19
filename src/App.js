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
        <p>store: {store.todos[0].task}</p>
      </div>
    );
  }
}

export default connect(['store'])(App);
