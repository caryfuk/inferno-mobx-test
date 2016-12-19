import Inferno from 'inferno';
import App from './App';
import { Provider } from 'inferno-mobx'
import Store from './Store';
import './index.css';

Inferno.render(<Provider store={Store}>
  <App />
</Provider>, document.getElementById('app'));