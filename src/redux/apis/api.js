import { BASE_URL } from "../../../baseUrl";
import axios from "axios";

export const inventoryRegister = (payload) => {
  return axios.post(`${BASE_URL}/inventory/inventory-register`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const adminLogin = (payload) => {
  return axios.post(`${BASE_URL}/admin/admin-login`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const addInventoryProductApi = (payload) => {
  return axios.post(`${BASE_URL}/inventory/add-inventory-product`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const getInventoryProductApi = () => {
  return axios.get(`${BASE_URL}/admin/fetch-inventory-product`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const editInventoryProductApi = (payload) => {
  return axios.put(
    `${BASE_URL}/inventory/edit-inventory-product/${payload.id}`,
    payload.value,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const deleteInventoryProductApi = (payload) => {
  console.log(payload)
  return axios.delete(
    `${BASE_URL}/inventory/delete-inventory-product/${payload}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addCategoryApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/add-category`, payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getCategoryApi = (payload) => {
  return axios.get(
    `${BASE_URL}/admin/get-category/${payload.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addColorApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/add-color`, payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getColorApi = (payload) => {
  return axios.get(
    `${BASE_URL}/admin/get-color/${payload.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addSizeApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/add-size`, payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getSizeApi = (payload) => {
  return axios.get(
    `${BASE_URL}/admin/get-size/${payload.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addQuantityApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/add-quantity`, payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getQuantityApi = (payload) => {
  return axios.get(
    `${BASE_URL}/admin/get-quantity/${payload.id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const createBillingApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/create-billing`,payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getBillingApi = () => {
  return axios.get(
    `${BASE_URL}/admin/get-billing`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const updateBillingApi = (payload) => {
  console.log(payload)
  return axios.post(
    `${BASE_URL}/inventory/partial-payment/${payload.id}`,payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const addCustomerApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/add-customer`,payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const getCustomerApi = () => {
  return axios.get(
    `${BASE_URL}/inventory/get-customer`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const updateInventoryApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/update-inventory`,payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};

export const manageStockApi = (payload) => {
  return axios.post(
    `${BASE_URL}/inventory/manage-stock`,payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
};
