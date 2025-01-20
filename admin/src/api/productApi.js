import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

// Functions to make API requests
export const getProducts = async () => await axios.get(`${API_URL}/get`);
export const addProduct = async (data) =>
  await axios.post(`${API_URL}/add`, data);
export const updateProduct = async (id, data) =>
  await axios.put(`${API_URL}/update/${id}`, data);
export const deleteProduct = async (id) =>
  await axios.delete(`${API_URL}/delete/${id}`);
