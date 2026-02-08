import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [bodyType, setBodyType] = useState(localStorage.getItem('bodyType') || null);

    // Load user from local storage if needed (mock auth persistence)
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setBodyType(null);
        localStorage.removeItem('user');
        localStorage.removeItem('bodyType');
    };

    const saveBodyType = (type) => {
        setBodyType(type);
        localStorage.setItem('bodyType', type);
    };

    return (
        <UserContext.Provider value={{ user, bodyType, login, logout, saveBodyType }}>
            {children}
        </UserContext.Provider>
    );
};
