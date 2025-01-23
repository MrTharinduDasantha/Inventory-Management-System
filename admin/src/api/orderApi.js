import axios from "axios";

const API_URL = "http://localhost:3000/api/order";

// Functions to make API requests
export const getOrders = async () => await axios.get(`${API_URL}/admin`);
