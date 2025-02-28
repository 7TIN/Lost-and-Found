import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import api from './api.jsx'; // Use your custom api instance

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await api.get('/api/v1/users/');
                setUser(response.data);
            } catch (error) {
                setError(error.message);
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