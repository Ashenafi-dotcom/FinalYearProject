import React, { useState, useEffect } from 'react';
import { getAssets, deleteAsset } from '../services/assetService';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageAssets = ({ onEdit }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await getAssets();
      setAssets(response.data);
    } catch (error) {
      console.error('Failed to fetch assets:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAsset(id);
      alert('Asset deleted successfully');
      fetchAssets();
    } catch (error) {
      console.error('Failed to delete asset:', error);
      alert('Failed to delete asset');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-cyan-500" style={{ marginTop: '127px' }}>
      <h1 className="text-2xl font-bold mb-4 text-white">Manage Assets</h1>
      <ul className="bg-white p-4 rounded">
        {assets.map(asset => (
          <li key={asset._id} className="flex justify-between items-center mb-2 p-2 border border-gray-200 rounded">
            <div>
              <p className="font-bold">{asset.name}</p>
              <p>{asset.quantity} - {asset.description}</p>
              <p>{asset.status} - {new Date(asset.date).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => onEdit(asset)} className="p-1 bg-yellow-500 text-white rounded"><FaEdit /></button>
              <button onClick={() => handleDelete(asset._id)} className="p-1 bg-red-500 text-white rounded"><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAssets;
