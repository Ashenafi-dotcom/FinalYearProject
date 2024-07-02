// frontend/src/components/AssetList.js
import React from 'react';
import { deleteAsset } from '../services/assetService';
import toast from 'react-hot-toast';

const AssetList = ({ assets, onUpdate }) => {
    const handleDelete = async (id) => {
        try {
            await deleteAsset(id);
            toast.success('Asset deleted successfully');
        } catch (error) {
            toast.error('Error deleting asset');
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {assets.map((asset) => (
                    <tr key={asset._id}>
                        <td>{asset.name}</td>
                        <td>{asset.quantity}</td>
                        <td>{asset.description}</td>
                        <td>{asset.status}</td>
                        <td>{new Date(asset.date).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => onUpdate(asset)}>Update</button>
                            <button onClick={() => handleDelete(asset._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AssetList;
