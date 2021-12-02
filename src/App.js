import { LoadingBar } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import Component from './components';

const App = () => (
  <Provider store={store}>
    <LoadingBar />
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  </Provider>
);

export default App;
