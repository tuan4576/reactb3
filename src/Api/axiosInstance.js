import axios from "axios";
import AppUrl from "./AppUrl";
const axiosInstanceconfig = {
    baseURL: AppUrl.BaseURL, 
   headers: {
       'Authorization': `Bearer ${AppUrl.token}`,
       'Content-Type': 'application/json'
   },
};
export const axiosInstance = axios.create(axiosInstanceconfig)      