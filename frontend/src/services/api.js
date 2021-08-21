import axios from "axios";
const { REACT_APP_HOST } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_HOST,
});
