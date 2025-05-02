import { BASE_URL } from "../../../baseUrl";
import axios from "axios";

export const inventoryRegister = (payload) => {
  return axios.post(`${BASE_URL}/inventory/inventory-register`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};


