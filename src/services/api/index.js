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
lotrAPI.defaults.headers.common = {
  Authorization: `bearer LNp14nSl9dUIXi7vPi0y`
};
export { lotrAPI, catsAPI };
