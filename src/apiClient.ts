import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create();

apiClient.interceptors.response.use(undefined, error => {
  const statusCode = error.response && error.response.status;
  
  if (statusCode === 401 || statusCode === 403) {
    toast(error.message, { type: "error", position: "bottom-right", autoClose: false });
  }
  
  Promise.reject(error);
});

export default apiClient;