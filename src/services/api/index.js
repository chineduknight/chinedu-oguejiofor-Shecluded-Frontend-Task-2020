import axios from 'axios';

const CATS_API = process.env.REACT_APP_CATS_API;
const LOTR_API = process.env.REACT_APP_LOTR_API;
const token = process.env.REACT_APP_LOTR_TOKEN;
const catsKey = process.env.REACT_APP_CATS_KEY;

const catsAPI = axios.create({
  baseURL: CATS_API,
  timeout: 30000
});

catsAPI.defaults.headers.common = {
  'x-api-key': catsKey
};

const lotrAPI = axios.create({
  baseURL: LOTR_API,
  timeout: 30000
});

lotrAPI.defaults.headers.common = {
  Authorization: `bearer ${token}`
};
export { lotrAPI, catsAPI };
