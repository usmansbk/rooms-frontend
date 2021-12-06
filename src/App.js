import {
  BrowserRouter, Route, Routes, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Rooms from './components/pages/Rooms';
import Reservations from './components/pages/Reservations';
import AddRoom from './components/pages/AddRoom';
import DeleteRoom from './components/pages/DeleteRoom';
import Room from './components/pages/Room';
import Reserve from './components/pages/Reserve';
import RequireAuth, { RedirectAuth } from './components/RequireAuth';
import Toast from './components/common/Toast';
import './styles';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <RequireAuth>
            <Home />
          </RequireAuth>
        )}
      >
        <Route index element={<Rooms />} />
        <Route path="rooms" element={<Outlet />}>
          <Route path=":id" element={<Room />} />
          <Route path="new" element={<AddRoom />} />
          <Route path="delete" element={<DeleteRoom />} />
        </Route>
        <Route path="my-reservations" element={<Reservations />} />
        <Route path="reservations" element={<Outlet />}>
          <Route path="new" element={<Reserve />} />
        </Route>
      </Route>
      <Route path="/signin" element={<RedirectAuth><SignIn /></RedirectAuth>} />
      <Route path="/signup" element={<RedirectAuth><SignUp /></RedirectAuth>} />
    </Routes>
    <Toast />
  </BrowserRouter>
);

export default App;
