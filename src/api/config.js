import axios from 'axios';

const BASE_URL = 'https://5c796dbd3a89af0014cd71e6.mockapi.io/react-app/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
