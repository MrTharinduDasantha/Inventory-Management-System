import axios from "axios";

const API_URL = "http://localhost:3000/api/cart";

// Functions to make API requests
export const getCart = async () => await axios.get(`${API_URL}/get`);
export const addCart = async (data) => await axios.post(`${API_URL}/add`, data);
export const removeCart = async (id) => axios.delete(`${API_URL}/remove/${id}`);
export const updateCart = async (id, data) =>
  await axios.put(`${API_URL}/update/${id}`, data);
export const checkout = async (data) =>
  await axios.post(`${API_URL}/checkout`, data);
