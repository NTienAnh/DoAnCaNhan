import axios from "axios";

const url = {
  baseURL: "https://62874dfe7864d2883e8279e9.mockapi.io",
  UserDetail: "/UserDetail",
  zingHome: "zingHome",
  Book: "Book",
};
const instance = axios.create({
  baseURL: url.baseURL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
