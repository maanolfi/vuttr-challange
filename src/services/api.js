import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'https://vuttr-56d52.firebaseio.com',
});

export default api;
