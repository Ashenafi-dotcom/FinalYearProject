// frontend/src/components/AssetTable.js
import React, { useState, useEffect } from 'react';
import AddAsset from './AddAsset';
import UpdateAsset from './UpdateAsset';
import AssetList from './AssetList';
import { getAssets } from '../services/assetService';
import toast from 'react-hot-toast';

const AssetTable = () => {
    const [assets, setAssets] = useState([]);
    const [assetToUpdate, setAssetToUpdate] = useState(null);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await getAssets();
                setAssets(response.data);
            } catch (error) {
                toast.error('Error fetching assets');
            }
        };
        fetchAssets();
    }, []);

    return (
        <div>
            <AddAsset />
            {assetToUpdate && <UpdateAsset asset={assetToUpdate} onUpdate={setAssetToUpdate} />}
            <AssetList assets={assets} onUpdate={setAssetToUpdate} />
        </div>
    );
};

export default AssetTable;
