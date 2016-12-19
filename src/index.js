import Inferno from 'inferno';
import App from './App';
import { Provider } from 'inferno-mobx'
import Store from './Store';
import './index.css';

console.log(Store);

Store.addTodo("read MobX tutorial");
Store.addTodo("try MobX");
Store.todos[0].completed = true;
Store.todos[1].task = "try MobX in own project";
Store.todos[0].task = "grok MobX tutorial";

Inferno.render(<Provider store={ Store }>
  <App />
</Provider>, document.getElementById('app'));