import axios from "axios";

export const axiosi = axios.create({
  withCredentials: true,
  baseURL: "https://mernshop-sage.vercel.app",
});
