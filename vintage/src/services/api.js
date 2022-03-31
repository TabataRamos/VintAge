import axios from "axios";

export const instance = axios.create({
  baseURL: "https://vintage-api.herokuapp.com",
});
