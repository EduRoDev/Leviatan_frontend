import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function RootRedirect() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/upload" replace />;
  }

  return <Navigate to="/login" replace />;
}
