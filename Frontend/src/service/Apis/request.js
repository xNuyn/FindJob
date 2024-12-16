import axios from "axios";
import Cookies from "js-cookie";
// export const BASE_URL = 'http://localhost:3000/api';
export const BASE_URL = 'http://3.107.159.28:3000/api';

// export const BASE_URL = 'http://18.218.38.71:3000/api';
const request = axios.create({
  // Use the correct key for accessing the base URL
  baseURL: BASE_URL, 
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("token") || "";
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Redirect to login if the response status is 401
    if (error.response && error.response.status === 401) {
        Cookies.remove("token"); // Clear token from localStorage
      if (!window.location.href.includes("/login")) {
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);

export const setHeaderConfigAxios = (token) => {
  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete request.defaults.headers.common["Authorization"];
  }
};

export default request;
