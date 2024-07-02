
import React, { useState, useEffect } from 'react';
import { createAsset, updateAsset } from '../services/assetService';
import '../styles/tailwind.css';

const AddAsset = ({ assetToEdit, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    description: '',
    status: '',
    date: ''
  });

  useEffect(() => {
    if (assetToEdit) {
      setFormData({
        name: assetToEdit.name,
        quantity: assetToEdit.quantity,
        description: assetToEdit.description,
        status: assetToEdit.status,
        date: assetToEdit.date
      });
    }
  }, [assetToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (assetToEdit) {
        await updateAsset(assetToEdit._id, formData);
        alert('Asset updated successfully');
      } else {
        await createAsset(formData);
        alert('Asset created successfully');
      }
      onSave();
      setFormData({ name: '', quantity: '', description: '', status: '', date: '' });
    } catch (error) {
      console.error('Failed to save asset:', error);
      alert('Failed to save asset');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-cyan-500" style={{ marginTop: '127px' }}>
      <h1 className="text-2xl font-bold mb-4 text-white">{assetToEdit ? 'Edit Asset' : 'Create Asset'}</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-4 rounded">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            required
            placeholder="Asset Name"
            className="input col-span-2 sm:col-span-1 border border-gray-500 p-2 rounded hover:border-green-500 placeholder-red-500"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            autoComplete="off"
            required
            placeholder="Quantity"
            className="input col-span-2 sm:col-span-1 border border-gray-500 p-2 rounded hover:border-green-500 placeholder-red-500"
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          autoComplete="off"
          required
          placeholder="Description"
          className="textarea col-span-2 border border-gray-500 p-2 rounded hover:border-green-500 placeholder-red-500"
        />
        <div className="grid grid-cols-2 gap-4">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            autoComplete="off"
            className="select col-span-2 sm:col-span-1 border border-gray-500 p-2 rounded hover:border-green-500"
          >
            <option value="" className="placeholder-red-500">Select status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            autoComplete="off"
            required
            className="input col-span-2 sm:col-span-1 border border-gray-500 p-2 rounded hover:border-green-500 placeholder-red-500"
          />
        </div>
        <button type="submit" className="btn col-span-2 bg-black text-white p-2 rounded hover:bg-gray-800">
          {assetToEdit ? 'Update Asset' : 'Create Asset'}
        </button>
      </form>
    </div>
  );
};
export default AddAsset;
