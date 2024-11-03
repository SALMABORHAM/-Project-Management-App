// src/api/auth.js
import { jwtDecode } from 'jwt-decode'; // Correct

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decoded = jwtDecode(token);
        return decoded.exp * 1000 > Date.now();
    }
    return false;
};
