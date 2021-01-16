import Axios from "axios";

const API_SERVER = 'http://localhost:5000'

  
export const getAllBooks = async () => {
    const response = await fetch(`${API_SERVER}/books`);
  
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    
    return response.json();
  };
  

  export const getOrders = async () => {
    const response = await Axios.get(`/api/order/all`);
    return response.data;
  };
  export const getMyOrders = async () => {
    
    const response = await Axios.get(`/api/order/myorders`);
    return response.data;
  };