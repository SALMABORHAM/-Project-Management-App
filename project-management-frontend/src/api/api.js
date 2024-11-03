// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44363/api',  // Base URL of your .NET backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
