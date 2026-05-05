import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import UserPage from './pages/user-page.tsx';
import LoginPage from './pages/login.tsx';
import AlbumPage from './pages/album-page.tsx';
import PhotoPage from './pages/photo-page.tsx';
import SettingsPage from './pages/settings-page.tsx';
import NotFoundPage from './pages/not-found.tsx';
import { useAppStore } from "@/store/app-store";


function App(): React.JSX.Element {

const theme = useAppStore((state) => state.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route path="/" element={<Layout />}>
            <Route
            path="users/:id"
            element={<UserPage />}
            />
            <Route
              path="albums/:id"
              element={<AlbumPage />}
            />
            <Route
              path="photos/:id"
              element={<PhotoPage />}
            />
            <Route
              path="settings"
              element={<SettingsPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
};

export default App;
