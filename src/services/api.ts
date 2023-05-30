import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://api-clients-w9us.onrender.com',
    timeout: 45000
});

export default api;
