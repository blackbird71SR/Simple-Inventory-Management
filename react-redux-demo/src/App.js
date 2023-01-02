import { Provider } from 'react-redux';

import './App.css';
// import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksItemContainer from './components/HooksItemContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <h3>Without Hooks</h3>
        <CakeContainer /> */}
        {/* <h3>With Hooks</h3> */}
        {/* <HooksCakeContainer />
        <hr />
        <HooksIceCreamContainer /> */}
        <HooksItemContainer item='cake' />
        <HooksItemContainer item='iceCream' />
      </div>
    </Provider>
  );
}

export default App;
