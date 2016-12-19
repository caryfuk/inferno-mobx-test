import Inferno from 'inferno';
import App from './App';
import { Provider } from 'inferno-mobx'
import ObservableStore from './ObservableStore';
import './index.css';

Inferno.render(<Provider store={ObservableStore}>
  <App />
</Provider>, document.getElementById('app'));