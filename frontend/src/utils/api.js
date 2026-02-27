import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.10.58.67:5000/api/user',
});

export default instance;
