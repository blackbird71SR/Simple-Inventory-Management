import { Provider } from 'react-redux';

import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h3>Without Hooks</h3>
        <CakeContainer />
        <hr />
        <h3>With Hooks</h3>
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
