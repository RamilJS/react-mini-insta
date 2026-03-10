import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import UserPage from './pages/user-page.tsx';
import LoginPage from './pages/login.tsx';
import AlbumPage from './pages/album-page.tsx';
import PhotoPage from './pages/photo-page.tsx';
import SettingsPage from './pages/settings-page.tsx';
import NotFoundPage from './pages/not-found.tsx';

function App(): React.JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route element={<Layout />}>
          <Route
          path="/user"
          element={<UserPage />}
          />
          <Route
            path="/albums/:id"
            element={<AlbumPage />}
          />
          <Route
            path="/photos/:id"
            element={<PhotoPage />}
          />
          <Route
            path="/settings"
            element={<SettingsPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
};

export default App
