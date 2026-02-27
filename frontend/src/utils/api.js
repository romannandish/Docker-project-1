import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://mern-backend-container:5000/api/user',
});

export default instance;
