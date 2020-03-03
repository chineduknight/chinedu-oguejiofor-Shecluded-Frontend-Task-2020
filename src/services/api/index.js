import axios from 'axios';

const CATS_API = process.env.REACT_APP_CATS_API;
const LOTR_API = process.env.REACT_APP_LOTR_API;

const catsAPI = axios.create({
  baseURL: CATS_API,
  timeout: 30000
});

const lotrAPI = axios.create({
  baseURL: LOTR_API,
  timeout: 30000
});
export { lotrAPI, catsAPI };
