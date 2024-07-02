import axios from 'axios';

const API_URL = 'http://localhost:5000/api/assets';

// Fetch all assets
export const getAssets = () => axios.get(`${API_URL}/get`);

// Create a new asset
export const createAsset = (asset) => axios.post(`${API_URL}/create`, asset);

// Update an existing asset
export const updateAsset = (id, asset) => axios.put(`${API_URL}/update/${id}`, asset);

// Delete an asset
export const deleteAsset = (id) => axios.delete(`${API_URL}/delete/${id}`);
