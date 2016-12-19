import Inferno from 'inferno';
import Component from 'inferno-component';
import { observer } from "mobx-inferno";
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    const { completedTodosCount, report } = this.props.store;
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>completed todos: {completedTodosCount}</p>
        <p>report: {report}</p>
      </div>
    );
  }
}

export default observer(App);
