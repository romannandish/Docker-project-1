import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://18.170.58.181:5000/api/user',
});

export default instance;
