import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:4000/api/v1", // replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
    // You can add auth token here if you use one, e.g.:
    // Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  timeout: 10000, // optional timeout
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData,
    headers: headers ?? {},
    params,
  });
};
