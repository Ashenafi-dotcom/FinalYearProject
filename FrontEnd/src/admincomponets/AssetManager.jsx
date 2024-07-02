import React, { useState, useEffect } from 'react';
import AssetForm from './AddAsset';
import { getAssets, deleteAsset } from '../services/assetService';

const AssetManager = () => {
  const [assets, setAssets] = useState([]);
  const [assetToEdit, setAssetToEdit] = useState(null);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const assetsData = await getAssets();
      setAssets(assetsData.data);
    } catch (error) {
      console.error('Failed to fetch assets:', error);
    }
  };

  const handleSave = () => {
    fetchAssets();
    setAssetToEdit(null);
  };

  const handleEdit = (asset) => {
    setAssetToEdit(asset);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAsset(id);
      fetchAssets();
    } catch (error) {
      console.error('Failed to delete asset:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <AssetForm assetToEdit={assetToEdit} onSave={handleSave} />
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-4">Asset List</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset._id}>
                <td className="py-2 px-4 border">{asset.name}</td>
                <td className="py-2 px-4 border">{asset.quantity}</td>
                <td className="py-2 px-4 border">{asset.description}</td>
                <td className="py-2 px-4 border">{asset.status}</td>
                <td className="py-2 px-4 border">{new Date(asset.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleEdit(asset)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(asset._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetManager;
