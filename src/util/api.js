import axios from 'axios';

const api = axios.create({
  baseURL: 'https://driveacademy-backend.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    
    if (token) {
      config.headers['authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      console.log('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default api;
