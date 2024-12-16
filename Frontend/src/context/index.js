import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getMe } from '../service/Apis/auth';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Tải dữ liệu user từ cookie lúc đầu
        const savedUser = Cookies.get('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [token, setToken] = useState(() => Cookies.get('token') || '');

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user && token) {
                try {
                    const response = await getMe();
                    handleSetUser(response.data); // Gọi handleSetUser để cập nhật user vào cookie
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUserData();
    }, [user, token]);

    const handleSetUser = (userData) => {
        const newUser = {
            id: userData._id,
            username: userData.username,
            profilePicture: userData.profilePicture || '',
            email: userData.email || '',
            bio: userData.bio || '',
        };
        setUser(newUser);
        Cookies.set('user', JSON.stringify(newUser)); // Lưu user vào cookie
    };

    const handleSetToken = (tokenData) => {
        setToken(tokenData);
        Cookies.set('token', tokenData);
    };

    const handleLogout = () => {
        setUser(null);
        setToken('');
        Cookies.remove('user');
        Cookies.remove('token');
    };

    return (
        <UserContext.Provider value={{ user, token, setUser: handleSetUser, setToken: handleSetToken, logout: handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};
