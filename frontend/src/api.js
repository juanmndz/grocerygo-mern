import Axios from "axios";

  export const getOrders = async () => {
    const response = await Axios.get(`/api/order/all`);
    return response.data;
  };
  export const getMyOrders = async () => {
    
    const response = await Axios.get(`/api/order/myorders`);
    return response.data;
  };