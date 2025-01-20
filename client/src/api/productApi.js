import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

// Functions to make API requests
export const getProducts = async () => await axios.get(`${API_URL}/get`);
