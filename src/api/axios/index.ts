import axios from "axios";
import config from "../../config/env";
import { message } from "antd";

const instance = axios.create({
  baseURL: config.instance.baseURL,
  timeout: 10000,
  // headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.authToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${localStorage.authToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const { method } = response.config;
    if (["post", "put", "delete", "patch"].includes(method)) {
      message.success("Success!");
    }
    return response.data;
  },
  function (error) {
    const info: { code?: number; message?: string } = {};
    if (!error.response) {
      info.code = 500;
      info.message = "Network Error";
    } else {
      info.code = error.response.data?.code || 500;
      info.message = error.response.data?.message || "Internal Server Error";
    }
    message.destroy();
    message.error(info.message);
    return Promise.reject(info);
  }
);
export default instance;
