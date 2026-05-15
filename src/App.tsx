import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/error/error-fallback";
import PageLoader from "@/components/loading/page-loader";
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
  useTheme();
  const userId = useAppStore((state) => state.userId);

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<PageLoader />}>
                  <Layout />
                </Suspense>
              </ErrorBoundary>
            }
          >

            <Route
              index
              element={
                userId
                  ? <Navigate to={`/users/${userId}`} replace />
                  : <Navigate to="/login" replace />
              }
            />

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
