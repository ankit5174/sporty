import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3",
  timeout: 10000,
});