import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3033',
});

export default api;
