import axios from "axios";

const API_URL = "http://localhost:3000/api/order";

// Functions to make API requests
export const getOrders = () => axios.get(`${API_URL}/admin`);
export const deleteOrder = (id) => axios.delete(`${API_URL}/admin/${id}`);
