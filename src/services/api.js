import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_URL,
});

export const getPlan = async (bodyType) => {
  try {
    const response = await api.get(`/plans/${bodyType}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching plan:", error);
    throw error;
  }
};
