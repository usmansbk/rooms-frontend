import {
  BrowserRouter, Route, Routes, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Rooms from './components/Rooms';
import Reservations from './components/Reservations';
import AddRoom from './components/AddRoom';
import DeleteRoom from './components/DeleteRoom';
import Room from './components/Room';
import Reserve from './components/Reserve';
import RequireAuth, { RedirectAuth } from './components/RequireAuth';

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
        <Route path="rooms" element={<Outlet />}>
          <Route index element={<Rooms />} />
          <Route path=":id" element={<Room />} />
          <Route path="new" element={<AddRoom />} />
          <Route path="delete" element={<DeleteRoom />} />
        </Route>
        <Route path="reservations" element={<Outlet />}>
          <Route index element={<Reservations />} />
          <Route path="new" element={<Reserve />} />
        </Route>
      </Route>
      <Route path="/signin" element={<RedirectAuth><SignIn /></RedirectAuth>} />
      <Route path="/signup" element={<RedirectAuth><SignUp /></RedirectAuth>} />
    </Routes>
  </BrowserRouter>
);

export default App;
