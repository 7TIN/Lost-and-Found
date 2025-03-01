import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login', { state: { from: location }, replace: true });
        }
    }, [user, loading, navigate, location]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return user ? children : null;
};

export default PrivateRoute;
