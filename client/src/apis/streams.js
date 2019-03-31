import axios from 'axios';

//we are creating an axios instance in order to use api request to this url
export default axios.create({
  baseURL: 'http://localhost:3001',
});
