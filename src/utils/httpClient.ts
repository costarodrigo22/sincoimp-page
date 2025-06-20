import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  // Add any custom headers or configurations here
  // For example, you can add an Authorization header if needed
  return config;
});
