// // src/context/AuthContext.js
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import jwtDecode from 'jwt-decode';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setUserRole(decoded.role);
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ userRole }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode'; // Use named import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token'); // Example: getting a JWT from local storage

    const user = token ? jwtDecode(token) : null; // Decode token to get user info

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
