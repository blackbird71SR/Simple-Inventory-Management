import { Provider } from 'react-redux';

import './App.css';
// import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <h3>Without Hooks</h3>
        <CakeContainer /> */}
        {/* <h3>With Hooks</h3> */}
        <HooksCakeContainer />
        <hr />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
