// src/utils/getUserRole.js
import { jwtDecode } from 'jwt-decode'; // Correctly import jwtDecode

export const getUserRole = () => {
  const token = localStorage.getItem('token'); // Example of retrieving a JWT
  if (!token) return null; // No token means no role

  try {
    const user = jwtDecode(token); // Decode the JWT to access user data
    return user.role; // Assuming your token includes a role field
  } catch (error) {
    console.error('Invalid token', error);
    return null; // Return null if the token is invalid
  }
};
