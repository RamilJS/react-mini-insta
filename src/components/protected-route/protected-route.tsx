import { Navigate, Outlet } from "react-router-dom";
import { useAppStore } from "@/store/app-store";

function ProtectedRoute(): React.JSX.Element {
  const userId = useAppStore((state) => state.userId);

  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
