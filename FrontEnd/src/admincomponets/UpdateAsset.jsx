// frontend/src/components/UpdateAsset.js
import React, { useState } from 'react';
import { updateAsset } from '../services/assetService';
import toast from 'react-hot-toast';

const UpdateAsset = ({ asset, onUpdate }) => {
    const [updatedAsset, setUpdatedAsset] = useState(asset);

    const handleChange = (e) => {
        setUpdatedAsset({
            ...updatedAsset,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateAsset(updatedAsset._id, updatedAsset);
            toast.success('Asset updated successfully');
            onUpdate(null);  // Clear the update form
        } catch (error) {
            toast.error('Error updating asset');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={updatedAsset.name} onChange={handleChange} placeholder="Name" required />
            <input name="quantity" value={updatedAsset.quantity} onChange={handleChange} placeholder="Quantity" required />
            <input name="description" value={updatedAsset.description} onChange={handleChange} placeholder="Description" required />
            <input name="status" value={updatedAsset.status} onChange={handleChange} placeholder="Status" required />
            <input name="date" value={updatedAsset.date} onChange={handleChange} placeholder="Date" required />
            <button type="submit">Update Asset</button>
        </form>
    );
};

export default UpdateAsset;
