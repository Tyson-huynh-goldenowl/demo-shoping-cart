import axios from 'axios';
export default axios.create({
  baseURL: `https://606e64ab0c054f0017656dd4.mockapi.io/api/v1/`,
  headers: {
    'Content-Type': 'application/json'
  }
});