import axios from 'axios';
axios.defaults.baseURL = "https://64a05432ed3c41bdd7a73763.mockapi.io/";

export const fetchForCatalog = async() => {
      const response = await axios.get(`/cars?limit=8`);
      return response.data;
      
  }
 