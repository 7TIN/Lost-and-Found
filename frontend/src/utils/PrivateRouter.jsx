import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return null; // Or display a simple message like "Loading..."
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children; // Render the protected route
};

export default PrivateRoute;