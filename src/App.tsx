import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/layout/layout.tsx';
import UserPage from './pages/user-page.tsx';
import LoginPage from './pages/login.tsx';
import AlbumPage from './pages/album-page.tsx';
import PhotoPage from './pages/photo-page.tsx';
import SettingsPage from './pages/settings-page.tsx';
import NotFoundPage from './pages/not-found.tsx';
import ProtectedRoute from './components/protected-route/protected-route.tsx';
import { useAppStore } from "@/store/app-store";
import { useTheme } from "@/hooks/use-theme";

function App(): React.JSX.Element {
  // const theme = useAppStore((state) => state.theme);
  useTheme();
  const userId = useAppStore((state) => state.userId);

  return (
    
      <BrowserRouter>
        <Routes>

          {/* login отдельно */}
          <Route path="/login" element={<LoginPage />} />

          {/* основное приложение */}
          <Route path="/" element={<Layout />}>

            {/* ВОТ ОН — редирект с "/" */}
            <Route
              index
              element={
                userId
                  ? <Navigate to={`/users/${userId}`} replace />
                  : <Navigate to="/login" replace />
              }
            />

            {/* защищённые роуты */}
          <Route element={<ProtectedRoute />}>
            <Route path="users/:id" element={<UserPage />} />
            <Route path="albums/:id" element={<AlbumPage />} />
            <Route path="photos/:id" element={<PhotoPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
