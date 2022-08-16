import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL


const defaultOptions = {
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  };


const axiosInstance = axios.create(defaultOptions)

  axiosInstance.interceptors.request.use(function (config) {

    if(config.url.startsWith('/')){

      

    }

    return config;
  }, function (error) {

    return Promise.reject(error);
  });


axiosInstance.interceptors.response.use(function (response) {

    return response;
  }, function (error) {
    if(error.response.status === 403 && error.config.url.startsWith('/')){
        
    }
    return Promise.reject(error);
  });

export default axiosInstance;
