import { LoadingBar } from 'react-redux-loading-bar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBar />
    </BrowserRouter>
  </Provider>
);

export default App;
