import React, { createContext, useState, useEffect } from 'react';
import api from './api.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/api/v1/users/me');
                setUser(response.data); 
            } catch (error) {
                setUser(null);
                setError(error.response?.data?.message || "Failed to fetch user");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
