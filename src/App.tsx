import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserPage from './pages/user-page.tsx';
import LoginPage from './pages/login.tsx';
import NotFoundPage from './pages/not-found.tsx';

function App(): React.JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/user"
          element={<UserPage />}
        />
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  )
};

export default App
